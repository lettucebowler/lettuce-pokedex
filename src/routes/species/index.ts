export async function get() {
	return {
		status: 301,
		headers: {
			location: '/species/bulbasaur/variant/default'
		}
	};
}
