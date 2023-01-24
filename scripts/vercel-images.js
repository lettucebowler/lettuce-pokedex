import fs from 'node:fs';

const file = '.vercel/output/config.json';

const config = {
	...JSON.parse(fs.readFileSync(file, 'utf-8')),
	images: {
		sizes: [64, 128, 256, 512]
	}
};

fs.writeFileSync(file, JSON.stringify(config, null, 2));
