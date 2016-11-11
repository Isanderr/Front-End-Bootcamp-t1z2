(function($, window, document, undefined){
	$(document).ready(function(){

		var grid12 = $('.grid.grid-12');
		grid12.css({
			'border': 'solid 1px red'
		});

		var a_href = $('.nav').find('a[href^="http"]');
		a_href.css({
			'color': 'red'
		});

		var inputs = $('input[type=checkbox]:not(":checked"), input[type=radio]:not(":checked")');
		inputs.wrap('<span class="input-wrapper"></span>');

		var text = $('div.text');
		var p = text.find('p').filter(function(i, elem) {
			return $(elem).children().length == 0;
		})
		p.first().css({
			'background-color': '#998'
		})

		var pagination_item = $('.pagination-item').not('span');
		pagination_item.css({
			'background-color': 'red'
		})

	})
})(jQuery, window, document) 