/*
 * Copyright (c) 2012 Mike King @micjamking (http://dev.85pixels.com)
 * 
 * jQuery Menutron plugin
 * Version 1.0 (March 2012)
 *
 * Licensed under the MIT License
 */

(function($){
	$.fn.menutron = function(options) {

		var defaults = {
			maxScreenWidth: 600
		};

		var options = $.extend(defaults, options);

		return this.each(function() {
			
			var menu = $(this);
			var screenWidth = "(max-width: " + options.maxScreenWidth + "px)";

			init();

			function init() {
				transformMenu();
			}

			function transformMenu() {
				
				// Media query for device screens (default: 600px)
				if (window.matchMedia(screenWidth).matches) {				
					$(document).ready(function(){

						// Create an empty select menu		
						var selectMenu = $('<select>');
						
						// Get the list within the child container
						var children = $(menu).children();

						// Loop through the current list menu & adds the li's text
						// & the anchors url to the option & it's value respectively.
						$(children).children().each(function() {
							
							// If using a descriptive list, 'dl',
							// this only adds 'dd' to selectMenu & skips over 'dt'
							if($(this).get(0).tagName !== 'DT'){
								var option = $('<option>').text($(this).text());
								var link = $(this).children("a").attr("href");
								$(option).attr("value", link);
								$(option).appendTo(selectMenu);
							}
						});

						// Adds an option item to inform the user to Choose
						var selectedNav = ['<option selected="selected" value>Choose...</option>'].join("");

						// Appends the newly created list to menu's container element
						$(selectMenu).prepend(selectedNav);
						selectMenu.appendTo($(menu));

						// Hides the original menu list from the display
						$(children).css("display", "none");	

						// Change Window.location, ie. the current url,
						// to the value of the selected option
						$('select').change(function(){
							if($(this).val()!=''){
								window.location.href=$(this).val();
							}
						});
					});
				}
			}

		});
	};
})(jQuery);