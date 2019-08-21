function hr() {
	$('body').append('<hr/>');
}

function title(link, text) {
	const html = $(`<a href="${link}">${text || link}</a>`);
	$('body').append(html);
}

function subtitle(params) {
	const html = $(`<p>${params}</p>`);
	$('body').append(html);
}

function div(color) {
	const html = $('<div>').css('background-color', color).attr('title', color);
	$('body').append(html);
}

const generators = [];

// func: (count, addColor(color))
function addGenerator(link, title, description, func) {
	const descr = !description ? '' : `<p>${description.trim().replace(/\n/g, '<br/>')}</p>`;

	const html = `
		<section>
			<h1>${title}</h1>
			${descr}
			<p>Source: <a href="${link}">${link}</a> </p>
			<div class="colors"></div>
		</section>`;
	const $parent = $(html);
	$('body').append($parent);
	const $colors = $parent.children('.colors');
	generators.push({link, description, func, div: $colors});
}

function generateAll(count) {
	generators.forEach(gen => {
		
		const render = () => {
			gen.func(count, color => {
				const colorDiv = $('<div>').css('background-color', color).attr('title', color);
				gen.div.append(colorDiv);
			});
		};

		render();

		const link = $('<button>Again</button>');
		gen.div.after(link);
		link.click(() => {
			gen.div = $('<div class="colors"></div>');
			link.before(gen.div);
			render();
		});
	});
}
