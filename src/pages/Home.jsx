import { Link } from 'react-router-dom'
import heroBg from '../assets/Images/hero.jpg'

export default function Home() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center text-center"
      aria-label="Hero section showcasing travel vans for adventure trips"
    >
      <img
        src={heroBg}
        alt="Scenic road with a travel van ready for adventure"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-lg px-6 text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">
          You got the travel plans, we got the travel vans.
        </h1>

        <p className="mt-4 text-white/90">
          Add adventure to your life by joining the Vanture movement. Rent the perfect van to make
          your perfect road trip.
        </p>

        <Link to="/vans" className="btn-primary mt-8">
          Find your van
        </Link>
      </div>
    </section>
  )
}
