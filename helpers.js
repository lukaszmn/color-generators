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
