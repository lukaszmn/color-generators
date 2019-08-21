addGenerator('17', 'https://github.com/davidmerfield/randomColor', 'Attractive random colors', null, () => {

	/* include https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.5.4/randomColor.min.js */

	const dmarr = [
		['random', undefined],
		['random', 'bright'],
		['random', 'light'],
		['random', 'dark'],

		['monochrome', undefined],
		['red', undefined],
		['green', undefined],
		['blue', undefined]
	];
	const sections = [];
	for (let dm of dmarr) {
		sections.push({
			title: `Hue = ${dm[0]}, Luminosity = ${dm[1]}`,
			params: dm,
			getColors: (count, params) => {
				const dm_colors = randomColor({
					count,
					hue: params[0],
					luminosity: params[1]
				});

				return dm_colors;
			}
		});
	}

	return sections;
});