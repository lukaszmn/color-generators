addGenerator('https://stackoverflow.com/a/3109564', 'Random with limited ranges', ``,
() => {

	function generateColor(ranges) {
		if (!ranges) {
			ranges = [
				[150,256],
				[0, 190],
				[0, 30]
			];
		}
		var g = function() {
			//select random range and remove
			var range = ranges.splice(Math.floor(Math.random()*ranges.length), 1)[0];
			//pick a random number from within the range
			return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
		}
		return "rgb(" + g() + "," + g() + "," + g() +")";
	};

	return [{
		getColors: (count, params) => {
			return [...Array(count).keys()].map(i => generateColor());
		}
	}];
});