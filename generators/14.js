addGenerator('https://github.com/internalfx/distinct-colors', 'Distinct Colors', null, () => {

	/* include: distinct-colors.min.js */

	const ranges = [
		[0, 100, 0, 100],
		[0, 40, 60, 100],
		[70, 100, 0, 100],
		[0, 100, 0, 60],
		[0, 100, 70, 100]
	];
	const sections = [];
	for (let range of ranges) {
		sections.push({
			title: `Chroma = ${range[0]}..${range[1]}, Lightness = ${range[2]}..${range[3]}`,
			params: range,
			getColors: (count, params) => {
				const colors = new DistinctColors({
					count,
					chromaMin: params[0],
					chromaMax: params[1],
					lightMin: params[2],
					lightMax: params[3]
				});
	
				return colors;
			}
		});
	}

	return sections;
});