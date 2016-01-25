//This is the main file used by Require.js to load all the other JavaScript and Template files.

/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		},
    bootstrap: {
      deps: [
        'jquery'
      ],
      exports: 'Bootstrap'
    }
    /*
    NRP: {
      deps: [
        'jquery',
        'backbone',
        'bootstrap'
      ],
      exports: 'NRP'
    }
    */
	},
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
		text: '../node_modules/requirejs-text/text',
    bootstrap: './libs/bootstrap.min'
    //NRP: './'
	}
});

require([
	'jquery',
  'backbone',
  'bootstrap',
  'NRP'
], function ($,Backbone, Bootstrap, NRP) {
	
  //$(document).ready( function() {
  //  debugger;
  //});
  
  new NRPView();

});
