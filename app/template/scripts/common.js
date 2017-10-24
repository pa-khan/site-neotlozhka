$(document).ready(function($) {

	$('.slider').slick({
		dots: true,
		arrows: false
	});

	$('.specialists__list').slick({
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>'
	});

	$('.shares').slick({
		arrows: false,
		dots: true
	});

	$('.reviews__list').slick({
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


	setTimeout(function() {
		$('select').styler();
	}, 100)
	
	$('.faq__head').click(function () {
		var body = $(this).siblings('.faq__body'),
				parent = $(this).parents('.faq__item');
		body.slideToggle(300);
		parent.toggleClass('faq__item_active')
	});

	$(".panel__nav a, .order-list__button-link").click(function (event) {


		var id  = $(this).attr('href');

		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		}

	});

	$('.popup__button').click(function () {
		parent.jQuery.fancybox.getInstance().close();
		$.fancybox.open({
			src  : '#popup-thanks',
			type : 'inline'
		});
	})

	$('.input_phone').mask('+7 (999) 999-99-99');
});