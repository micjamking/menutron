#Menutron 
A jQuery plugin for responsive navigation menus

##What it does
Menutron transforms your navigation menus from a list to a select menu when resizing your browser. On mobile devices, the select menu pulls up a native control, making it easier to pick an item.

* __It's concise__ - When implemented in a responsive design, your menu becomes consolidated in to a single control, saving you horizontal and/or vertical real-estate.
* __It's intuitive__ - It works on any type of list (ol,ul,dl) and the select control is easily recognizable.
* __It's convenient__ - On mobile devices, the select controls will activate a native control, like the picker control for iOS, which can be navigated using drag, nudge, or flick gestures. 


##How it does it
Let's say your navigation menu markup looks like this:
```
	<nav id="main">
		<ul>
			<li><a href="http://www.google.com">Google</a></li>
			<li><a href="http://www.facebook.com">Facebook</a></li>
			<li><a href="http://www.twitter.com">Twitter</a></li>
			<li><a href="http://www.pinterest.com">Pinterest</a></li>
			<li><a href="http://www.flickr.com">Flickr</a></li>
		</ul>
	</nav>
```

Simply call the Menutron function, using the navigation tag as a selector
```
	<script>
		$(function (){
			$("#nav, nav").menutron();
		});
	</script>
```

By default, the plugin has a media query set to ```max-width: 600px```. If you want to set your own media query, the plugin has an option for that. Just pass in your desired size to ```maxScreenWidth``` like below:
```
	<script>
		$(function (){
			$("#nav, nav").menutron({
				maxScreenWidth: 450
			});
		});
	</script>
```


##What you'll need (dependencies)


