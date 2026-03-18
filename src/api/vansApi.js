import { db } from '../firebase/firestore'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite'

export async function getVans() {
	const vansCollectionRef = collection(db, 'vans')

	const snapshot = await getDocs(vansCollectionRef)

	return snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}))
}

export async function getVan(id) {
	const vanRef = doc(db, 'vans', id)

	const snapshot = await getDoc(vanRef)

	if (!snapshot.exists()) {
		throw new Error('Van not found')
	}

	return {
		id: snapshot.id,
		...snapshot.data(),
	}
}
