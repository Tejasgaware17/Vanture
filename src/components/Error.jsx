import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  let message = 'Something went wrong.'

  if (isRouteErrorResponse(error)) {
    message = `${error.status} - ${error.statusText}`
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <section role="alert" className="container-app py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <p className="text-text-gray">{message}</p>
    </section>
  )
}
