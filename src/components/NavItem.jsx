import { NavLink } from 'react-router-dom'

export default function NavItem({ to, children, className = '', ...rest }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        ${isActive ? 'text-text font-bold' : 'text-text-gray font-medium hover:text-text'}
        ${className}
        `
      }
      {...rest}
    >
      {children}
    </NavLink>
  )
}
