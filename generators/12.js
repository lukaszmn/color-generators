addGenerator('12', 'https://stackoverflow.com/a/10019872', 'HSL', ``,
() => {

	function RGB2Color(r, g, b) {
		return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
	}

	function byte2Hex(n) {
		var nybHexString = "0123456789ABCDEF";
		return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
	}

	function makeColorGradient(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {
		var colors = []
		if(len == undefined)
			len = 50;
		if(center == undefined)
			center = 128;
		if(width == undefined)
			width = 127;

		for(var i = 0; i < len; ++i) {
			var red = Math.sin(frequency1 * i + phase1) * width + center;
			var grn = Math.sin(frequency2 * i + phase2) * width + center;
			var blu = Math.sin(frequency3 * i + phase3) * width + center;
			colors.push(RGB2Color(red, grn, blu));
		}

		return colors;
	}

	const grarr = [
		[.3, .3, .3,  0, 2, 4,  128, 127],
		[.3, .3, .3,  0, 2, 4,  200, 55],
		[.2, .2, .2,  0, 2, 4,  128, 127],
		[.15, .35, .55,  0, 2, 4,  128, 127],
		[2.4, 2.4, 2.4,  0, 2, 4,  128, 127],
		[1.66, 2.66, 3.66,  0, 2, 0,  128, 127],
		[.2, .2, .2,  0, 1, 0,  128, 127],
		[.2, .2, .2,  0, 1, 1,  128, 127],
	];
	const sections = [];
	for (let gr of grarr) {
		
		sections.push({
			title: `Frequencies: ${gr[0]} ${gr[1]} ${gr[2]}, Phases: ${gr[3]} ${gr[4]} ${gr[5]}, Center: ${gr[6]}, Width: ${gr[7]}`,
			params: gr,
			getColors: (count, params) => {
				const colors = makeColorGradient(params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], count);
				return colors;
			}
		});
	}

	return sections;
});