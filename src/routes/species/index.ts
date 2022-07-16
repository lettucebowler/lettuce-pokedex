export async function GET() {
	return {
		status: 301,
		headers: {
			location: '/species/bulbasaur/variant/default'
		}
	};
}
