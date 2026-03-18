import { useLoaderData, Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import NavItem from '../components/NavItem'

export default function HostVanDetailLayout() {
  const van = useLoaderData()

  return (
    <main className="container-host">
      <Link to=".." relative="path" className="underline flex items-center gap-2 text-lg my-4">
        ← Back to all vans
      </Link>

      <div className="flex gap-8 items-center bg-white p-4 rounded-lg shadow-sm">
        <img
          src={van.imageUrl}
          alt={`${van.name} camper van`}
          className="size-32 object-cover rounded-md"
        />

        <div>
          <span
            className="inline-block px-3 py-1 text-sm text-white rounded-md capitalize"
            style={{
              backgroundColor: `var(--color-van-${van.type})`,
            }}
          >
            {van.type}
          </span>

          <h1 className="text-lg font-bold py-2">{van.name}</h1>

          <p className="text-text-gray">
            <span aria-label={`${van.price} dollars per day`}>${van.price}</span>
            <span aria-hidden="true">/day</span>
          </p>
        </div>
      </div>

      <nav
        className="flex gap-6 mt-6 border-b-2 border-gray-200 pb-3"
        aria-label="Van management navigation"
      >
        <NavItem to="." end>
          Details
        </NavItem>

        <NavItem to="pricing">Pricing</NavItem>

        <NavItem to="photos">Photos</NavItem>
      </nav>

      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Outlet context={{ van }} />
      </Suspense>
    </main>
  )
}
