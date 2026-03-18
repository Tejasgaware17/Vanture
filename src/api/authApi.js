import { db } from '../firebase/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore/lite'

export async function loginUser({ email, password }) {
	const usersRef = collection(db, 'users')

	const q = query(usersRef, where('email', '==', email), where('password', '==', password))
	const snapshot = await getDocs(q)

	if (snapshot.empty) {
		throw {
			message: 'Invalid email or password',
			status: 401,
		}
	}

	const userDoc = snapshot.docs[0]
	const { password: _, ...userData } = userDoc.data()

	return {
		token: 'fake-token',
		user: {
			id: userDoc.id,
			...userData,
		},
	}
}
