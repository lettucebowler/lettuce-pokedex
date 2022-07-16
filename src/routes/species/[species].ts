export async function GET({ params }: { params: { species: string } }) {
	const { species } = params;

	return {
		status: 301,
		headers: {
			location: `/species/${species}/variant/default/form/default`
		}
	};
}
