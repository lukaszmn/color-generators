addGenerator('01', 'https://stackoverflow.com/a/7638362', 'Purely random', null, () => {

	return [{
		getColors: (count, params) => {
			return [...Array(count).keys()].map(i => 
				'#' + Math.random().toString(16).substr(2,6)
			);
		}
	}];
});