import { Link, useLoaderData, useLocation } from 'react-router-dom'
import VanBadge from '../../components/VanBadge'
import { formatAmount } from '../../utils/money'

export default function VanDetail() {
  const van = useLoaderData()
  const location = useLocation()
  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  return (
    <section className="container-app max-w-4xl mx-auto py-8" aria-labelledby="van-heading">
      <Link
        to={`..${search}`}
        relative="path"
        className="underline flex items-center gap-2 text-lg"
        aria-label={`Back to ${type} vans`}
      >
        ← Back to {type} vans
      </Link>

      <article className="mt-6 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img
            src={van.imageUrl}
            alt={`${van.name} camper van`}
            className="rounded-lg w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 items-baseline">
          <VanBadge type={van.type} />

          <h1 id="van-heading" className="text-3xl font-bold text-text">
            {van.name}
          </h1>

          <p className="text-xl font-bold" aria-label={`Rental price: ${van.price} per day`}>
            {formatAmount(van.price)}
            <span className="text-text-gray text-base font-medium" aria-hidden="true">
              {' '}
              /day
            </span>
          </p>

          <p className="text-text-light leading-relaxed">{van.description}</p>

          <button className="btn-primary" aria-label={`Rent ${van.name} camper van`}>
            Rent this van
          </button>
        </div>
      </article>
    </section>
  )
}
