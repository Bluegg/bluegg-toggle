# Bluegg Toggle
Declarative toggle using data attributes

## Wut?
The JS simply adds a class of ```is-toggled``` to a specific target(s).

Your target is specified in a data attribute (```data-toggle-target="my-thing"```). The target then needs to have a ```data-toggle-name="my-thing"``` attribute. The target can be a single target or comma separated list (e.g. ```data-toggle-target="my-thing,my-other-thing"```). You can optionally specify a ```data-target-action="on"``` (on or off) that can be used to only allow the control to add/remove the ```is-toggled``` class.  

## Huh?
Usage in JS:
```js
var toggle = require('bluegg-toggle');

toggle();
```

[See here for style and markup example](http://codepen.io/matthewbeta/pen/qNzZRO?editors=1010)
