import { useLoaderData, useSearchParams, Await } from 'react-router-dom'
import { Suspense } from 'react'
import VanCard from './VanCard'
import VanFilters from './VanFilters'
import VansSkeleton from '../../components/VanSkeleton'

export default function Vans() {
  const data = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams)

      if (value === null) {
        newParams.delete(key)
      } else {
        newParams.set(key, value)
      }

      return newParams
    })
  }

  function renderVans(vans) {
    const displayVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
    const vanElements = displayVans.map(van => (
      <li key={van.id}>
        <VanCard
          key={van.id}
          van={van}
          linkState={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        />
      </li>
    ))

    return (
      <>
        <VanFilters typeFilter={typeFilter} handleFilterChange={handleFilterChange} />

        <p className="sr-only" aria-live="polite" role="status">
          Showing {displayVans.length} vans
        </p>
        <ul className="grid grid-cols-2 gap-x-10 gap-y-12 sm:gap-x-12">{vanElements}</ul>
      </>
    )
  }

  return (
    <section className="container-app max-w-4xl mx-auto py-8" aria-labelledby="vans-heading">
      <h1 id="vans-heading" className="text-3xl font-bold mb-6">
        Explore our van options
      </h1>

      <Suspense fallback={<VansSkeleton />}>
        <Await resolve={data.vans}>{renderVans}</Await>
      </Suspense>
    </section>
  )
}
