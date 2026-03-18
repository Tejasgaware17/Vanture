import { Link } from 'react-router-dom'
import VanBadge from '../../components/VanBadge'

export default function VanCard({ van, linkState }) {
  return (
    <Link to={`/vans/${van.id}`} state={linkState} className="block p-1 rounded-lg">
      <img src={van.imageUrl} alt={`${van.name} camper van`} className="w-full rounded-lg" />

      <h2 className="mt-2 sm:mt-4 text-xl font-semibold">{van.name}</h2>

      <p className="sm:mt-2 sm:text-xl text-text-gray font-semibold">
        <span aria-label={`${van.price} dollars per day`}>${van.price}</span>
        <span aria-hidden="true">/day</span>
      </p>

      <VanBadge type={van.type} />
    </Link>
  )
}
