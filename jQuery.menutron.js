/*
 * Copyright (c) 2012 Mike King @micjamking (http://dev.85pixels.com)
 * 
 * jQuery Menutron plugin
 * Version 1.0 (Aug 2012)
 *
 * Licensed under the MIT License
 */


(function($){
	$.fn.menutron = function(options) {

		var defaults = {
			screenSize: 600,
		};

		var options = $.extend(defaults, options);

		return this.each(function() {
			
			var menu = $(this);
			var screenSize = $(options.screenSize);

			init();

			function init() {
				transformMenu();
			}

			function transformMenu() {
				// Media query for device screens < 600px width
				//var deviceWidth = $("(max-width: " + screenSize + "px)");
				//console.log(deviceWidth);
				if (window.matchMedia("(max-width: 600px)").matches) {				
					$(document).ready(function(){

						// Create an empty select menu		
						var list = $('<select>');

						// Loop through the current ul list menu & adds the li's text
						// & the anchors url to the option & it's value respectively.	
						$(menu).find('li').each(function() { 
							var option = $('<option>').text($(this).text());
							var link = $(this).children("a").attr("href");
							$(option).attr("value", link);
							$(option).appendTo(list);
						});

						// Adds an option item to inform the user to Choose
						var selectedNav = ['<option selected="selected" value>Choose...</option>'].join("");

						// Appends the newly created list to main nav element
						$(list).prepend(selectedNav);
						list.appendTo($(menu));

						// Removes the original ul list from the display
						$('ul').css("display", "none");	

						// Change Window.location, ie. the current url, to the value
						// of the selected option
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