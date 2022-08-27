export async function GET({ params }: { params: { species: string; variant: string } }) {
	const { species, variant } = params;

	return new Response(undefined, {
		status: 301,
		headers: {
			location: `/species/${species}/variant/${variant}/form/default`
		}
	});
}
