import { Link } from 'react-router-dom'
import aboutHero from '../assets/Images/about-hero.webp'

export default function About() {
  return (
    <section aria-labelledby="about-heading">
      <div className="h-60 sm:h-100 w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="Travel van parked in a scenic landscape"
          className="h-full w-full object-cover"
          decoding="async"
          fetchpriority="high"
        />
      </div>

      <div className="container-app py-5">
        <h1 id="about-heading" className="text-3xl font-bold text-text">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>

        <p className="mt-4 text-text-gray">
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are
          recertified before each trip to ensure your travel plans can go off without a hitch.
        </p>

        <p className="mt-4 text-text-gray">
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world
          on 4 wheels.
        </p>

        <div className="mt-8 rounded-md bg-primary-light p-6">
          <h2 className="text-lg font-semibold text-text">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>

          <Link
            to="/vans"
            className="btn-primary mt-4 inline-block"
            aria-label="Explore available vans for rental"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  )
}
