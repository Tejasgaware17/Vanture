import { useLoaderData, Link, Await } from 'react-router-dom'
import { Suspense } from 'react'
import HostVansSkeleton from '../../components/HostVansSkeleton'

export default function HostVans() {
  const data = useLoaderData()

  function renderVans(vans) {
    const vanElements = vans.map(van => (
      <Link
        key={van.id}
        to={van.id}
        className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
      >
        <img src={van.imageUrl} alt={van.name} className="h-16 w-16 rounded-md object-cover" />

        <div>
          <h3 className="font-semibold text-lg">{van.name}</h3>
          <p className="text-text-gray">${van.price}/day</p>
        </div>
      </Link>
    ))

    return (
      <div className="flex flex-col gap-4">
        {vanElements.length === 0 ? (
          <p className="text-text-gray">You have no vans listed yet.</p>
        ) : (
          vanElements
        )}
      </div>
    )
  }

  return (
    <section className="container-host" aria-labelledby="host-vans">
      <h1 className="text-2xl font-bold">Your Vans</h1>
      <Suspense fallback={<HostVansSkeleton />}>
        <Await resolve={data.vans}>{renderVans}</Await>
      </Suspense>
    </section>
  )
}
