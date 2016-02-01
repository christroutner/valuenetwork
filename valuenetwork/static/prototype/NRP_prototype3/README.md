
# Overview on this project:
Because this UI is going to be a large piece of software with many facets, I started researching frameworks to keep all the code orderly, easy to navigate, and easy to read. I evaluated Backbone.js, Angular.js, and Ember.js, all competing JavaScript frameworks. Of the three Backbone is the least opinionated, easiest to understand, most flexible, and has the smallest footprint (in terms of downloaded kB of data). There is also a wonderfully written, free book on Backbone that can be [read here](https://addyosmani.com/backbone-fundamentals/) or [downloaded from GitHub](https://github.com/addyosmani/backbone-fundamentals).

In that same book, you can read bout Require.js, which is a library that allows for modular programming of web pages. Instead of having thousands of lines of code in a single JavaScript file, or making a ton of <script> calls to many files, Require.js allows code to be loaded on an as-needed basis. It also keeps code on specific things in specific files (modularity), making the navigation, understanding, and distributed development of the code easier.

Maria has been doing her UI design within the constraints of the AdminLTE template. This is an open source Bootstrap control-panel template. By using this standard template, we have a much better control over turning Maria's designs into what we can actually manifest in the browser. 

## NRP Prototype 3

1/26/16 Chris Troutner:
This third prototype was born from Prototype 2, which was born from [this project](https://github.com/requirejs/example-multipage-shim).

My goals for this iteration is to write a very simple API interface that does the following:

* Open the people.html page.
* Retrieve a list of People from the NRP API.
* Display the list of People in a list on the People. When a person is clicked in the list, display their info in a 'card'. This will also list out all projects this person is associated with.
* When a project is clicked, it will navigate to the project.html page and open a similar card displaying info on the project.
