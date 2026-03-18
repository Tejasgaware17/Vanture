import {
	getHostDashboardData,
	getHostIncomeData,
	getHostVans,
	getHostVan,
	getHostReviews,
} from '../../api/hostApi'
import { getCurrentUser } from '../../utils/auth'

export async function dashboardLoader() {
	const user = getCurrentUser()
	return getHostDashboardData(Number(user.id))
}

export async function hostIncomeLoader() {
	const user = getCurrentUser()
	return await getHostIncomeData(Number(user.id))
}

export async function hostVansLoader() {
	const user = getCurrentUser()
	const vans = await getHostVans(Number(user.id))
	return { vans }
}

export async function hostVanDetailLoader({ params }) {
	const van = await getHostVan(params.id)
	return van
}

export async function hostReviewsLoader() {
	const user = getCurrentUser()
	const { reviews, averageRating, totalReviews } = await getHostReviews(Number(user.id))
	return { reviews, averageRating, totalReviews }
}
