import { getVans, getVan } from '../../api/vansApi'

export function vansLoader() {
	return {
		vans: getVans(),
	}
}

export async function vanDetailLoader({ params }) {
	return getVan(params.id)
}
