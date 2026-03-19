import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from '../layout/MainLayout'
import Error from '../components/Error'
import NotFound from '../pages/NotFound'
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Vans = lazy(() => import('../pages/Vans/Vans'))
const VanDetail = lazy(() => import('../pages/Vans/VanDetail'))
import { vansLoader, vanDetailLoader } from '../pages/Vans/loaders'
import HostLayout from '../layout/HostLayout'
const Dashboard = lazy(() => import('../pages/Host/Dashboard'))
const Income = lazy(() => import('../pages/Host/Income'))
const HostVans = lazy(() => import('../pages/Host/HostVans'))
const Reviews = lazy(() => import('../pages/Host/Reviews'))
import {
  dashboardLoader,
  hostIncomeLoader,
  hostVansLoader,
  hostVanDetailLoader,
  hostReviewsLoader,
} from '../pages/Host/loaders'
import HostVanDetailLayout from '../layout/HostVanDetailLayout'
const HostVanInfo = lazy(() => import('../pages/Host/HostVanInfo'))
const HostVanPricing = lazy(() => import('../pages/Host/HostVanPricing'))
const HostVanPhotos = lazy(() => import('../pages/Host/HostVanPhotos'))
import { requireAuth } from '../utils/auth'
const Login = lazy(() => import('../pages/Login'))
import { loginAction } from '../pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="login" element={<Login />} action={loginAction} />

      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />} loader={({ request }) => requireAuth(request)}>
        <Route index element={<Dashboard />} loader={dashboardLoader} errorElement={<Error />} />
        <Route
          path="income"
          element={<Income />}
          loader={hostIncomeLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetailLayout />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={hostReviewsLoader}
          errorElement={<Error />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router
