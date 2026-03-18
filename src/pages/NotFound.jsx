import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-text">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-text">
        Sorry, the page you are looking for was not found.
      </h2>

      <p className="mt-2 text-text-gray">
        The page might have been removed or the URL might be incorrect.
      </p>

      <Link to="/" className="btn-primary mt-6">
        Return to Home
      </Link>
    </section>
  )
}
