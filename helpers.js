// {link, description, section[] }
// section: { title, params, getColors(count, params), div }
const generators = [];

// getSections: () => section[]
// section: { title, params, getColors(count, params) => colors[])) }
function addGenerator(id, link, title, description, getSections) {
	const descr = !description ? '' : `<p>${description.trim().replace(/\n/g, '<br/>')}</p>`;

	const html = `
		<article>
			<h1>${title}</h1>
			${descr}
			<p>Author: <a href="${link}">${link}</a>,
				Source code: <a href="generators/${id}.js">${id}.js</a> </p>
		</article>`;
	const $parent = $(html);
	$('body').append($parent);
	
	const sections = getSections();
	sections.forEach(section => {

		const $section = $('<section> <div class="colors"></div> </section>');
		$parent.append($section);

		if (section.title) {
			const $title = $(`<h2>${section.title}</h2>`);
			$section.append($title);
		}

		const $colors = $('<div class="colors"></div>');
		$section.append($colors);
		section.div = $colors;
	});

	generators.push({link, description, sections});
}

function generateAll(count) {
	generators.forEach(gen => {

		gen.sections.forEach(section => {

			const render = () => {
				const colors = section.getColors(count, section.params);
				colors.forEach(color => {
					const colorDiv = $('<div>').css('background-color', color).attr('title', color);
					section.div.append(colorDiv);
				});
			};

			render();

			const link = $('<button>More</button>');
			section.div.after(link);
			link.click(() => {
				section.div = $('<div class="colors"></div>');
				link.before(section.div);
				render();
			});

		});
	});
}
