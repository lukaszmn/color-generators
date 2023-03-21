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

		const $section = $('<section> </section>');
		$parent.append($section);

		if (section.title) {
			const $title = $(`<h2>${section.title}</h2>`);
			$section.append($title);
		}

		section.div = $section;
	});

	generators.push({link, description, sections});
}

function generateAll(count, firstRun = false) {
	generators.forEach(gen => {

		gen.sections.forEach(section => {

			// clear all
			section.div.find('.colors').remove();

			const render = count1 => {

				const $colors = $('<div class="colors hidden"></div>');
				section.div.append($colors);

				const colors = section.getColors(count1, section.params);
				colors.forEach(color => {
					const colorDiv = $('<div>')
						.css('background-color', color)
						.attr('title', 'Color:\n' + color + '\nClick to copy')
						.attr('onclick', 'clip("' + color + '")');
					$colors.append(colorDiv);
				});

				setTimeout(() => $colors.removeClass('hidden'), 200);
			};

			render(count);

			if (firstRun) {
				const link = $('<button>More</button>');
				if (gen.sections.length === 1) {
					section.div.parents('article').children('h1').append(link);
				} else {
					section.div.children('h2').append(link);
				}
				link.click(() => {
					const count1 = parseInt($('#color-samples').val());
					render(count1);
				});
			}
		});
	});

	$('body').removeClass('waiting');
}

$(document).ready(() => {
	const $body = $('body');

	const $samples = $('#color-samples');
	$samples.change(function() {
		const count = parseInt(this.value);
		$body.addClass('waiting');
		// setTimeout to allow display #wait
		setTimeout(() => generateAll(count), 100);
	});

	$body.addClass('waiting');
	const initialCount = parseInt($samples.val());
	// setTimeout to allow display #wait
	setTimeout(() => generateAll(initialCount, true), 100);


	$('.select-links').each(function() {
		const $links = $(this).find('a');
		const CLASS_SEL = 'selected';

		$links.click(function() {
			const $this = $(this);

			$links.removeClass(CLASS_SEL);
			$this.addClass(CLASS_SEL);

			$links.each(function() {
				// `this` is item of `.each()`
				$body.removeClass(this.id);
			});
			$body.addClass($this.attr('id'));
		});
	});

});

function clip(color) {
	console.log('CLIP ' + color);
	const $temp = $('<input>');
	$('body').append($temp);
	$temp.val(color).select();
	$temp.select();
	$temp[0].setSelectionRange(0, 99999); // For mobile devices
	navigator.clipboard.writeText($temp.val());
	$temp.remove();
	showToast('Copied.');
}
