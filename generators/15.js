addGenerator('15', 'https://medialab.github.io/iwanthue/', 'i want hue - Colors for data scientists', null, () => {

	/* include: https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.0.4/chroma.min.js */

	/* include: https://medialab.github.io/iwanthue/js/libs/chroma.palette-gen.js */

	const ranges = [
		[0, 100, 0, 100, false],
		[0, 40, 60, 100, false],
		[70, 100, 0, 100, false],
		[0, 100, 0, 60, false],
		[0, 100, 70, 100, false],
	
		[0, 100, 0, 100, true],
		[0, 40, 60, 100, true],
		[70, 100, 0, 100, true],
		[0, 100, 0, 60, true],
		[0, 100, 70, 100, true]
	];
	const sections = [];
	for (let range of ranges) {
		sections.push({
			title: `Chroma = ${range[0]}-${range[1]}, Lightness = ${range[2]}-${range[3]}, Force Vector = ${range[4]}`,
			params: range,
			getColors: (count, params) => {
				let pg_colors = paletteGenerator.generate(
					count, // Colors
					function(color) { // This function filters valid colors
						var hcl = color.hcl();
						return hcl[0]>=0 && hcl[0]<=360
							&& hcl[1]>=params[0] && hcl[1]<=params[1]
							&& hcl[2]>=params[2] && hcl[2]<=params[3];
					},
					params[4], // Using Force Vector instead of k-Means
					50, // Steps (quality)
					false, // Ultra precision
					'Default' // Color distance type (colorblindness)
				);

				// Sort colors by differenciation first
				return paletteGenerator.diffSort(pg_colors, 'Default');
			}
		});
	}

	return sections;
});