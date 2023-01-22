const varietyFilters: { [x: string]: boolean } = {
	'floette-eternal': true,
	'rockruff-own-tempo': true,
	'minior-orange-meteor': true,
	'minior-yellow-meteor': true,
	'minior-green-meteor': true,
	'minior-blue-meteor': true,
	'minior-indigo-meteor': true,
	'minior-violet-meteor': true,
	'gumshoos-totem': true,
	'araquanid-totem': true,
	'lurantis-totem': true,
	'salazzle-totem': true,
	'marowak-totem': true,
	'vikavolt-totem': true,
	'togedemaru-totem': true,
	'mimikyu-totem-disguised': true,
	'mimikyu-totem-busted': true,
	'kommo-o-totem': true,
	'ribombee-totem': true,
	'raticate-totem-alola': true,
	'zygarde-10-power-construct': true,
	'zygarde-50-power-construct': true,
	'greninja-battle-bond': true,
	'pikachu-rock-star': true,
	'pikachu-belle': true,
	'pikachu-pop-star': true,
	'pikachu-phd': true,
	'pikachu-libre': true,
	'pikachu-cosplay': true,
	'pikachu-starter': true,
	'eevee-starter': true,
	'basculegion-female': true,
	'tauros-paldea-combat-breed': true,
	'tauros-paldea-blaze-breed': true,
	'tauros-paldea-aqua-breed': true
};

const defaultOverrides = new Map([
	['enamorus', 'incarnate'],
	['urshifu', 'single-strike'],
	['basculegion', 'male'],
	['morpeko', 'full-belly'],
	['indeedee', 'male'],
	['eiscue', 'ice'],
	['pumpkaboo', 'average'],
	['gourgeist', 'average'],
	['darmanitan', 'standard'],
	['wormadam', 'plant'],
	['giratina', 'altered'],
	['basculin', 'red-striped'],
	['zygarde', '50'],
	['toxtricity', 'amped'],
	['shaymin', 'land'],
	['aegislash', 'shield'],
	['meowstic', 'male'],
	['deoxys', 'normal'],
	['oricorio', 'baile'],
	['lycanroc', 'midday'],
	['wishiwashi', 'solo'],
	['meloetta', 'aria'],
	['keldeo', 'ordinary'],
	['landorus', 'incarnate'],
	['thundurus', 'incarnate'],
	['tornadus', 'incarnate'],
	['minior', 'red-meteor'],
	['mimikyu', 'disguised']
]);

const formFilters = ['pichu-spiky-eared', 'arceus-unknown', 'enamorus-incarnate'];

const formSpeciesFilters = ['scatterbug', 'spewpa', 'sinistea', 'polteageist', 'mothim'];

export const getDefaultForm = (species: string) => {
	const override = defaultOverrides.get(species);
	return override ? override : 'default';
};

export const filterForms = (species: string, forms: any[]) => {
	return forms.filter(
		(f) => !formFilters.includes(f.name) && !formSpeciesFilters.includes(species)
	);
};

export const filterVarieties = (varieties: any[]) => {
	return varieties.filter((v: any) => {
		return !varietyFilters[v.pokemon.name];
	});
};

export const cleanupChain = (chain: any) => {
	return {
		evolves_to: chain.evolves_to.map((chain: any) => cleanupChain(chain)),
		species: chain.species.name,
		id: parseInt(chain?.species?.url?.split('/').at(-2))
	};
};
