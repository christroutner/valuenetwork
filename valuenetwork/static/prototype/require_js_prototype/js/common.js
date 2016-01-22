//This file is listed as a dependency for the example files that I used to start this project. Once I remove all the
//example files, I can delete this file. Until then, I'm leaving it here so that it doesn't cause errors.
//Note: my own replacement for 'common' is the NRP.js. I need to replace references to common with references to NRP.

/*global define*/
'use strict';

define([], function () {
	return {
		// Which filter are we using?
		TodoFilter: '', // empty, active, completed

		// What is the enter key constant?
		ENTER_KEY: 13,
		ESCAPE_KEY: 27
	};
});
