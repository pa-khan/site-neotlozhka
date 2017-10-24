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


	/* Calc */
	var calcSelect = $('.select-calc'),
			calcSum = $('.sum-calc'),
			calcDiscount = $('.discount-calc'),
			calcTotal = $('.total-calc'),
			calcCurrency = $('#select-currency');

	calcSum.html(0);

	
	
	function sum(count) {
		var sum = Number(calcSum.html()),
				count = Number(count),
				plus = sum + count,
				plus = String(plus);
		calcSum.html(plus);
	}
	function discount() {
		var sum = Number(calcSum.html()),
				discount = Number(calcDiscount.html());

		calcTotal.html(sum - (sum/100*discount));
	}
	
	
	function splitCount(value) {
		var newValue = String(value.html());
		value.html(newValue.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	}

	function currencyIcon(name) {
		if(name == 'dollar'){
			return "$";
		}
		if(name == 'ruble'){
			return "р.";
		}
		if(name == 'euro'){
			return "€";
		}
		if(name == 'pound'){
			return "£";
		}
	}
	function currency() {
		var calcCurrencyVal = calcCurrency.val(),
				calcCurrencyMultiplier = Number(calcCurrency.find('option[value = '+ calcCurrencyVal +']').attr('data-currency-value'),
				total = calcTotal.html()),
				totalCurrency = total * calcCurrencyMultiplier;
		$('.total-count').each(function () {

			var unit = $(this).attr('data-unit'),
					value = $(this).html().replace(' ', ''),
					block = $('.price__currency[data-unit = '+ unit +']'),
					total = (Number(value) / calcCurrencyMultiplier).toFixed(2);


			block.html(currencyIcon(calcCurrencyVal) + " " + total);

		})

	}


	function calc() {
		calcSum.html(0);
		calcSelect.each(function () {
			var optionSelected = $(this).find('option:selected'),
				optionSelectedPrice = optionSelected.attr('data-price-value');
			sum(optionSelectedPrice);
			discount();
		})
		splitCount(calcSum);
		splitCount(calcTotal);
		currency();
	}


	calc();
	calcSelect.change(function () {
		calc();
	})

	calcCurrency.change(function () {
		currency();
	})

});