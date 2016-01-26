# 1/25/16 Chris Troutner:
This prototype represents a dead end. I was trying to wrap the whole AdminLTE template inside a div to control as a Backbone View. That wasn't working very well. The next iteration will load the AdminLTE first as a dependency to the NRP app.

# Old Stuff:

## NRP UI Prototype
This is a Backbone.js and Require.js project.
* Backbone.js is a front end framework (similar to Angular or Ember) used to give structure to the JavaScript used to control the UI.
* Require.js allows for modular programming of JavaScript programs. Backbone Models, Views, and Templates can all live in their own file/directory structure and be compiled at run time rather than stuffing everything into one giant file (traditional development).

## requirejs/example prototype

1/21/16 Chris Troutner

I'm trying to follow the directions in this BackboneJS book:
* https://addyosmani.com/backbone-fundamentals/#organizing-modules-with-requirejs-and-amd

I'm also using these Backbone/Require examples as templates:
* https://github.com/requirejs/example-multipage-shim
* https://github.com/javascript-playground/backbone-require-example
* https://github.com/tastejs/todomvc/tree/master/examples/backbone_require

This project uses