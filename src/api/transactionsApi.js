import { db } from '../firebase/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore/lite'

export async function getHostTransactions(hostId) {
	const ref = collection(db, 'transactions')

	const q = query(ref, where('hostId', '==', hostId))

	const snapshot = await getDocs(q)

	return snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}))
}
