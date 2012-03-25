/*
Author: Mike King (@micjamking)
*/

// Media query for device screens < 600px width
if (screen.width < 600) {					
	$(document).ready(function(){
		
		// Create an empty select menu		
		var list = $('<select>');
		
		// Loop through the current ul list menu & adds the li's text
		// & the anchors url to the option & it's value respectively.	
		$('nav ul li').each(function() { 
			var option = $('<option>').text($(this).text());
			var link = $(this).children("a").attr("href");
			$(option).attr("value", link);
			$(option).appendTo(list);
		});
		
		// Adds an option item to inform the user to Choose
		var selectedNav = ['<option selected="selected" value>Choose...</option>'].join("");
		
		// Appends the newly created list to main nav element
		$(list).prepend(selectedNav);
		list.appendTo($('nav'));		
		
		// Change Window.location, ie. the current url, to the value
		// of the selected option
		$('select').change(function(){
			if($(this).val()!=''){
				window.location.href=$(this).val();
			}
		});
		
		// Removes the original ul list from the display
		var nav = $('nav ul').remove();
	});
}


/******************* 
 Plugin Architecture 
*******************/


/*(function($){
    $.yourPluginName = function(el, radius, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("yourPluginName", base);

        base.init = function(){
            if( typeof( radius ) === "undefined" || radius === null ) radius = "20px";

            base.radius = radius;

            base.options = $.extend({},$.yourPluginName.defaultOptions, options);

            // Put your initialization code here
        };

        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        //
        // };

        // Run initializer
        base.init();
    };

    $.yourPluginName.defaultOptions = {
        radius: "20px"
    };

    $.fn.yourPluginName = function(radius, options){
        return this.each(function(){
            (new $.yourPluginName(this, radius, options));

		   // HAVE YOUR PLUGIN DO STUFF HERE

		   // END DOING STUFF

        });
    };

})(jQuery);*/