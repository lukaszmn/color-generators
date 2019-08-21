addGenerator('https://stackoverflow.com/a/2629539', 'Random with limited range: 6-D', ``,
() => {

	function get_random_color() {
		var letters = '6789ABCD'.split('');
		var color = '#';
		for (var i=0; i<3; i++ ) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
	}

	return [{
		getColors: (count, params) => {
			return [...Array(count).keys()].map(i => get_random_color());
		}
	}];
});