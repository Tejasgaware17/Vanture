import { useOutletContext } from 'react-router-dom'
import { formatAmount } from '../../utils/money'

export default function HostVanPricing() {
  const { van } = useOutletContext()

  return (
    <section className="mt-6" aria-label="Pricing information">
      <p className="text-xl font-bold" aria-label={`Rental price: ${van.price} per day`}>
        {formatAmount(van.price)}
        <span className="text-text-gray text-base font-medium" aria-hidden="true">
          {' '}
          /day
        </span>
      </p>
    </section>
  )
}
