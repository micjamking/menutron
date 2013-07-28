/*
 * Copyright (c) 2012 Mike King @micjamking (http://dev.85pixels.com)
 * 
 * jQuery Menutron plugin
 * Version 1.0 (March 2012)
 *
 * Licensed under the MIT License
 */
(function(a){a.fn.menutron=function(b){var c={maxScreenWidth:600,menuTitle:"Choose..."};var b=a.extend(c,b);return this.each(function(){var i=a(this).children();var f=a("<select>").css("display","none");var h=a("<optgroup>").css("display","none");g();function g(){e();d();j()}function e(){if(a(window).width()<b.maxScreenWidth){a(f).css("display","inline-block");a(i).css("display","none")}else{a(f).css("display","none");a(i).css("display","block")}}function d(){a(i).children().each(function(){if(a(this).get(0).tagName!=="DT"){if(a(this).find("ul,ol,dl").length){a(h).attr("label",a(this).children(":first").text());var l=a("<option>").text(a(this).children(":first").text());var m=a(this).children("a").attr("href");a(l).attr("value",m);a(l).appendTo(h);var n=a(this).children().not(":first");a(n).children().each(function(){var o=a("<option>").text(a(this).text());var p=a(this).children("a").attr("href");a(o).attr("value",p);a(o).appendTo(h)});console.log(h);a(h).appendTo(f)}else{var l=a("<option>").text(a(this).text());var m=a(this).children("a").attr("href");a(l).attr("value",m);a(l).appendTo(f)}}});var k='<option selected="selected" value>'+b.menuTitle+"</option>";a(f).prepend(k);f.appendTo(a(i).parent());f.change(function(){if(a(this).val()!=""){window.location.href=a(this).val()}})}function j(){a(window).resize(function(){e()})}})}})(jQuery);