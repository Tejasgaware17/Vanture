import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import NavItem from '../components/NavItem'

export default function HostLayout() {
  return (
    <section className="container-app max-w-4xl mx-auto py-8" aria-labelledby='host-heading'>
      <h1 id="host-heading" className="sr-only">
        Host dashboard navigation
      </h1>

      <nav className="flex gap-6 pb-4" aria-label="Host dashboard navigation">
        <NavItem to="." end>
          Dashboard
        </NavItem>
        <NavItem to="income">Income</NavItem>
        <NavItem to="vans">Vans</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
      </nav>

      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  )
}
