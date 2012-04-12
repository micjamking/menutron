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
			
			var menu = $(this).children();
			var screenWidth = "(max-width: " + options.maxScreenWidth + "px)";		
			var selectMenu = $('<select>').css("display", "none");	

			init();

			function init() {
				createMenu();
				transformMenu();
			}

			function createMenu(){

				// Loop through the current list menu & adds the li's text
				// & the anchors url to the option & it's value respectively.
				$(menu).children().each(function() {
				
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
				// FYI, I would like to replace this with the dl's dt if present
				//if ($(menu).find('dt')){
				//	var menuTitle = ['<option selected="selected" value>' + $(menu).find('dt').text() + '</option>'].join("");
				//	$(selectMenu).prepend(menuTitle);
				//} else {
				//	var menuTitle = ['<option selected="selected" value>Choose...</option>'].join("");
				//	$(selectMenu).prepend(menuTitle);
				//}

				var menuTitle = '<option selected="selected" value>Choose...</option>';

				// Appends the newly created list to menu's container element
				$(selectMenu).prepend(menuTitle);
				selectMenu.appendTo($(menu).parent());

				// Change Window.location, ie. the current url,
				// to the value of the selected option
				$('select').change(function(){
					if($(this).val()!=''){
						window.location.href=$(this).val();
					}
				});

			}

			function transformMenu() {

				// Media query for device screens (default: 600px)
				// *Note, window.matchMedia does not work on Android 2.3 (Gingerbread)
				if ($(window).width() <= options.maxScreenWidth) {

					// Hides the original menu list from the display
					$(selectMenu).css("display", "inline-block");

					// Hides the original menu list from the display
					$(menu).css("display", "none");
				}

				// Event trigger for responsive menu
				$(window).resize(function(){
					if ($(window).width() < options.maxScreenWidth){

						// Hides the original menu list from the display
						$(selectMenu).css("display", "inline-block");

						// Hides the original menu list from the display
						$(menu).css("display", "none");				
					} else {

						// Hides the original menu list from the display
						$(selectMenu).css("display", "none");

						// Show the original menu list
						$(menu).css("display", "block");
					}
				});
			}

		});
	};
})(jQuery);