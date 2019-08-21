addGenerator('https://stackoverflow.com/a/7638362', 'Purely random', null, (count, addColor) => {

	for (let i = 0; i < count; ++i) {
		const color = '#' + Math.random().toString(16).substr(2,6);
		addColor(color);
	}
});