import { redirect } from 'react-router-dom'

export function isAuthenticated() {
	return Boolean(localStorage.getItem('token'))
}

export function requireAuth(request) {
	const isLoggedIn = isAuthenticated()

	if (!isLoggedIn) {
		const url = new URL(request.url)
		throw redirect(`/login?message=You%20must%20log%20in%20first&redirectTo=${url.pathname}`)
	}

	return null
}

export const demoCredentials = {
	email: import.meta.env.VITE_DEMO_EMAIL,
	password: import.meta.env.VITE_DEMO_PASSWORD,
}

export function getCurrentUser() {
	const user = localStorage.getItem('user')
	return user ? JSON.parse(user) : null
}

export function logout() {
	localStorage.removeItem('token')
	localStorage.removeItem('user')
}
