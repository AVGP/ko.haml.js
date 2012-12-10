ko.haml.js
==========

Use Haml for templating in knockout.js

Dependencies:
-------------

* jQuery
* underscore.js
* underscore.string.js
* clientside-haml.js ( https://github.com/uglyog/clientside-haml-js )

How to use
----------

In your application javascript call

```javascript
ko.setTemplateEngine(new ko.hamlEngine());
```

And use this markup to include your templates (say "model" is an object from our view model):

```html
<!-- Actual content -->
<div data-bind="template: { name: 'greeting', data: model }"></div>
<div data-bind="template: { name: 'edit', data: model }"></div>

<!-- Template includes -->
<script id='greeting' src='templates/_greeting.haml' type='text/html'></script>
<script id='edit' type='text/html' src="templates/_edit.haml"></script>  
```

A template may look like this (where "name" is a property from "model" in our view model):

```haml
%div= name
%input(data-bind="value: name")
```

Notice the slightly different syntax from clientside-haml!
