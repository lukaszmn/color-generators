function hr() {
	$('body').append('<hr/>');
}

function title(link, descr) {
	const text = 'Source' + (descr || '');
	const html = $(`<a href="${link}">${text}</a>`);
	$('body').append(html);
}

function div(color) {
	const html = $('<div>').css('background-color', color).attr('title', color);
	$('body').append(html);
}