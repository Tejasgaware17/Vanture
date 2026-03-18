import { useLoaderData, Link } from 'react-router-dom'
import { formatAmount } from '../../utils/money'
import { useMemo } from 'react'

export default function Dashboard() {
  const { vans, income, averageRating, totalReviews } = useLoaderData()
  const displayVans = useMemo(() => {
    return vans.slice(0, 3)
  }, [vans])

  return (
    <section className="container-host" aria-labelledby="host-dashboard">
      <div className="flex flex-col gap-4">
        <h1 id="host-dashboard-title" className="text-text text-2xl font-bold">
          Your Dashboard
        </h1>
        <div className="bg-white rounded-lg p-6 shadow-sm flex justify-between items-end">
          <div>
            <p className="text-text-gray text-sm mb-1">Last 30 days</p>
            <p className="sr-only">Total income</p>
            <p className="text-4xl font-bold">{formatAmount(income)}</p>
          </div>

          <Link
            to="income"
            className="text-text underline hover:text-text font-medium"
            aria-label="View income details"
          >
            Details
          </Link>
        </div>

        <div className="bg-primary-light rounded-lg p-6 shadow-sm flex justify-between items-end">
          <div>
            <h2 className="text-sm text-text mb-1">Reviews</h2>

            {totalReviews === 0 ? (
              <p className="text-text-gray font-semibold">No reviews yet</p>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>

                <span className="text-primary text-2xl" aria-label="average rating">
                  ★
                </span>

                <span className="text-text">({totalReviews})</span>
              </div>
            )}
          </div>

          <Link
            to="reviews"
            className="text-text underline hover:text-text font-medium"
            aria-label="View reviews"
          >
            Details
          </Link>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your listed vans</h2>

          <Link
            to="vans"
            className="text-text-gray underline hover:text-text font-medium"
            aria-label="View all listed vans"
          >
            View all
          </Link>
        </div>

        <div className="space-y-4">
          {displayVans.length === 0 ? (
            <p className="text-text-gray">You have no vans listed yet.</p>
          ) : (
            displayVans.map(van => (
              <div
                key={van.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={van.imageUrl}
                  alt={`${van.name} van`}
                  className="w-16 h-16 rounded-md object-cover"
                />

                <div>
                  <h3 className="font-semibold">{van.name}</h3>
                  <p className="text-text-gray">
                    <span className="sr-only">Price</span>${van.price}
                    <span aria-hidden="true">/day</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
