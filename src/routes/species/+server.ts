export async function GET() {
	return new Response(undefined, {
		status: 301,
		headers: {
			location: '/species/bulbasaur/variant/default'
		}
	});
}
