import {
  Form,
  redirect,
  useSearchParams,
  useActionData,
  useNavigation,
  useSubmit,
} from 'react-router-dom'
import { loginUser } from '../api/authApi'
import { demoCredentials } from '../utils/auth'

// eslint-disable-next-line react-refresh/only-export-components
export async function loginAction({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const res = await loginUser(data)
    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res.user))
    const url = new URL(request.url)
    const redirectTo = url.searchParams.get('redirectTo') || '/host'
    return redirect(redirectTo)
  } catch (error) {
    return error
  }
}

export default function Login() {
  const [searchParams] = useSearchParams()
  const actionData = useActionData()
  const navigation = useNavigation()
  const submit = useSubmit()

  function handleDemoLogin() {
    const formData = new FormData()
    formData.append('email', demoCredentials.email)
    formData.append('password', demoCredentials.password)
    submit(formData, { method: 'post', replace: true })
  }

  const isSubmitting = navigation.state === 'submitting'
  const message = searchParams.get('message')
  const displayMessage = actionData?.message || message

  return (
    <section className="max-w-md mx-auto mt-20 px-6" aria-labelledby="login-heading">
      <h1 id="login-heading" className="text-3xl font-bold mb-6">
        Sign in
      </h1>

      {displayMessage && (
        <p role="alert" aria-live="assertive" className="text-red-500 mb-4">
          {displayMessage}
        </p>
      )}

      <Form method="post" className="space-y-4" replace>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="user@email.com"
            required
            className="w-full bg-white border-2 border-gray-200 rounded p-3 "
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            required
            className="w-full bg-white border-2 border-gray-200 rounded p-3 "
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
          {isSubmitting ? 'Logging in...' : 'Log in'}
        </button>

        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="space-y-4 mt-4">
          <p className="text-sm text-gray-500 text-center">
            Want to explore the app? Use the demo account.
          </p>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleDemoLogin}
            className="w-full border-2 rounded-md p-3 font-medium text-primary border-primary hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Logging Demo User...' : 'Use Demo Account'}
          </button>
        </div>
      </Form>
    </section>
  )
}
