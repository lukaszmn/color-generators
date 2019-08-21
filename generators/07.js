addGenerator('https://stackoverflow.com/a/43815463', 'Martin Ankerl\'s', ``,
() => {

	// adapted from
	// http://jsfiddle.net/Mottie/xcqpF/1/light/
	const rgb2hex = (rgb) => {
		return (rgb && rgb.length === 3) ? "#" +
			("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) : '';
	};

	// next two methods converted from Ruby to JS
	// soured from http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
	// # HSV values in [0..1[
	// # returns [r, g, b] values from 0 to 255
	const hsv_to_rgb = (h, s, v) => {
		const h_i = Math.floor(h*6);
		const f = h*6 - h_i;
		const p = v * (1 - s);
		const q = v * (1 - (f * s));
		const t = v * (1 - (1 - f) * s);
		let r, g, b;

		switch(h_i) {
			case(0):
				[r, g, b] = [v, t, p]
				break
			case(1):
				[r, g, b] = [q, v, p]
				break
			case(2):
				[r, g, b] = [p, v, t]
				break
			case(3):
				[r, g, b] = [p, q, v]
				break
			case(4):
				[r, g, b] = [t, p, v]
				break
			case(5):
				[r, g, b] = [v, p, q]
				break
		}

		return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)]
	};

	// # use golden ratio
	const golden_ratio_conjugate = 0.618033988749895;
	let h = Math.random(); // # use random start value
	
	const gen_hex = (numberOfColors) => {
		const colorArray = [];
		while (numberOfColors > 0) {
			h += golden_ratio_conjugate;
			h %= 1;
			colorArray.push(rgb2hex(hsv_to_rgb(h, 0.99, 0.99)));
			numberOfColors -= 1;
		}
		// console.log(colorArray)
		return colorArray;
	}

	return [{
		getColors: (count, params) => gen_hex(count)
	}];
});