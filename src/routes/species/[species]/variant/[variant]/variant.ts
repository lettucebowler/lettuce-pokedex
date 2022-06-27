export async function get({ params }: { params: { species: string; variant: string } }) {
	const { species, variant } = params;

	return {
		status: 301,
		headers: {
			location: `/species/${species}/variant/${variant}/form/default`
		}
	};
}
