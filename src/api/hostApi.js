import { db } from '../firebase/firestore'
import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore/lite'
import { getHostTransactions } from './transactionsApi'
import { getCurrentUser } from '../utils/auth'

export async function getHostDashboardData(hostId) {
	const vans = await getHostVans(hostId)
	const transactions = await getHostTransactions(hostId)
	const { reviews, averageRating, totalReviews } = await getHostReviews(hostId)

	transactions.sort((a, b) => new Date(b.date) - new Date(a.date))

	const income = transactions.reduce(
		(total, transaction) => total + Number(transaction.amount || 0),
		0
	)

	return {
		vans,
		income,
		reviews,
		averageRating,
		totalReviews,
	}
}

export async function getHostIncomeData(hostId) {
	const transactions = await getHostTransactions(hostId)
	transactions.sort((a, b) => new Date(b.date) - new Date(a.date))

	const income = transactions.reduce(
		(total, transaction) => total + Number(transaction.amount || 0),
		0
	)

	return {
		income,
		transactions,
	}
}

export async function getHostVans(hostId) {
	const vansCollectionRef = collection(db, 'vans')

	const q = query(vansCollectionRef, where('hostId', '==', hostId))

	const snapshot = await getDocs(q)

	return snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}))
}

export async function getHostVan(id) {
	const vanRef = doc(db, 'vans', id)

	const snapshot = await getDoc(vanRef)

	if (!snapshot.exists()) {
		throw new Error('Van not found')
	}

	const van = {
		id: snapshot.id,
		...snapshot.data(),
	}

	const user = getCurrentUser()

	if (van.hostId !== Number(user.id)) {
		throw new Error('Not authorized')
	}

	return van
}

export async function getHostReviews(hostId) {
	const reviewsCollectionRef = collection(db, 'reviews')

	const q = query(reviewsCollectionRef, where('hostId', '==', hostId))

	const snapshot = await getDocs(q)

	const reviews = snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}))

	reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	const averageRating =
		reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0

	return {
		reviews,
		averageRating,
		totalReviews: reviews.length,
	}
}
