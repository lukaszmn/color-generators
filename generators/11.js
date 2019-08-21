addGenerator('11', 'https://stackoverflow.com/a/10014550', 'Limited to 0, 3, 6, 9, c, f', null, () => {

	function randomColorA() {
		var allowed = "0369cf".split( '' ), s = "#";
		while ( s.length < 4 ) {
		   s += allowed.splice( Math.floor( ( Math.random() * allowed.length ) ), 1 );
		}
		return s;
	}

	return [{
		getColors: (count, params) => {
			return [...Array(count).keys()].map(i => randomColorA());
		}
	}];
});