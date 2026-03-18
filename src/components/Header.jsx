import { NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../assets/icons/user-icon.png'
import logoutIcon from '../assets/icons/logout-icon.png'
import { isAuthenticated, logout } from '../utils/auth'
import NavItem from './NavItem'

export default function Header() {
  const navigate = useNavigate()
  const isLoggedIn = isAuthenticated()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="container-app flex items-center justify-between py-4">
        <NavLink to="/" className="text-lg sm:text-xl font-extrabold text-text">
          VANTURE
        </NavLink>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <NavItem to="host">Host</NavItem>
          <NavItem to="about">About</NavItem>
          <NavItem to="vans">Vans</NavItem>

          {!isLoggedIn ? (
            <NavLink to="/login" aria-label="Login">
              <img src={userIcon} alt="" aria-hidden="true" className="size-6" decoding="async" />
            </NavLink>
          ) : (
            <button type="button" onClick={handleLogout} aria-label="Logout">
              <img src={logoutIcon} alt="" aria-hidden="true" className="size-6" decoding="async" />
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
