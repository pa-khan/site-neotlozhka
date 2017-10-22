$(document).ready(function($) {

	$('.slider').slick({
		dots: true,
		arrows: false
	});

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
		element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});

	}
	valueElementForm('radio');
	valueElementForm('checkbox');

});