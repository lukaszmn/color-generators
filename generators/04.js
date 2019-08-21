addGenerator('https://stackoverflow.com/a/25873123', 'HSL', ``,
() => {

	function randomHsl(saturation, lightness) {
		return 'hsla(' + (Math.random() * 360) + `, ${saturation}%, ${lightness}%, 1)`;
	}

	const hslarr = [[100,50], [100,70], [80,50], [80,70], [60,50], [60,40]];
	const sections = [];
	for (let hsl of hslarr) {
		sections.push({
			title: `Saturation = ${hsl[0]}%, Lightness = ${hsl[1]}%`,
			params: hsl,
			getColors: (count, params) => {
				return [...Array(count).keys()].map(i => randomHsl(params[0], params[1]));
			}
		});
	}

	return sections;
});