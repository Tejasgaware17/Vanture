import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Error from '../components/Error'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Vans from '../pages/Vans/Vans'
import { vansLoader, vanDetailLoader } from '../pages/Vans/loaders'
import VanDetail from '../pages/Vans/VanDetail'
import HostLayout from '../layout/HostLayout'
import Dashboard from '../pages/Host/Dashboard'
import Income from '../pages/Host/Income'
import HostVans from '../pages/Host/HostVans'
import Reviews from '../pages/Host/Reviews'
import {
  dashboardLoader,
  hostIncomeLoader,
  hostVansLoader,
  hostVanDetailLoader,
  hostReviewsLoader,
} from '../pages/Host/loaders'
import HostVanDetailLayout from '../layout/HostVanDetailLayout'
import HostVanInfo from '../pages/Host/HostVanInfo'
import HostVanPricing from '../pages/Host/HostVanPricing'
import HostVanPhotos from '../pages/Host/HostVanPhotos'
import { requireAuth } from '../utils/auth'
import Login, { loginAction } from '../pages/Login'

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
