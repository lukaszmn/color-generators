addGenerator('https://stackoverflow.com/a/17373688', 'Random color with minimum brightness', null, () => {

	function randomColor(brightness) {
		function randomChannel(brightness) {
			var r = 255-brightness;
			var n = 0|((Math.random() * r) + brightness);
			var s = n.toString(16);
			return (s.length==1) ? '0'+s : s;
		}

		return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
	}

	const brightnesses = [0, 60, 128, 200];
	const sections = [];
	for (let brightness of brightnesses) {
		sections.push({
			title: `Brightness = ${brightness}`,
			params: [brightness],
			getColors: (count, params) => {
				return [...Array(count).keys()].map(i => randomColor(params[0]));
			}
		});
	}

	return sections;
});