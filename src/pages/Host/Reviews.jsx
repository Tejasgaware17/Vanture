import { useLoaderData } from 'react-router-dom'

export default function Reviews() {
  const { reviews, averageRating, totalReviews } = useLoaderData()

  const ratingCounts = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length,
  }))

  if (reviews.length === 0) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-2">Reviews</h2>
        <p className="text-text-gray">No reviews yet.</p>
      </section>
    )
  }

  return (
    <section className="container-host" aria-labelledby="host-reviews">
      <div>
        <h2 className="text-2xl font-bold">Your reviews</h2>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-bold text-text-primary">{averageRating.toFixed(1)}</span>

          <span className="text-primary text-2xl" aria-label="average rating">
            ★
          </span>

          <p className="text-text-gray">
            based on {totalReviews} review{totalReviews !== 1 && 's'}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {ratingCounts.map(({ star, count }) => {
          const percent = totalReviews ? (count / totalReviews) * 100 : 0

          return (
            <div key={star} className="flex items-center gap-4">
              <span className="w-12 text-sm font-medium text-text-primary">{star} star</span>

              <div className="flex-1 h-3 bg-primary-light rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <span className="w-8 text-sm text-text-gray text-right">{percent.toFixed(0)}%</span>
            </div>
          )
        })}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-text-primary">Reviews ({totalReviews})</h3>

        <ul className="space-y-4">
          {reviews.map(review => (
            <li key={review.id} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-text-primary text-lg">{review.userName}</p>

                <div
                  className="flex items-center gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? 'text-primary' : 'text-gray-300'}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-text-gray mb-3">{review.comment}</p>

              {review.vanName && (
                <span className="text-text-gray">
                  <span className="font-medium">{review.vanName}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
