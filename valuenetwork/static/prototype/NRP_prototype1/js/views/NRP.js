/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
  'adminlte',
  'text!templates/NRP.html'
	//'collections/todos',
	//'views/todos',
	//'text!templates/stats.html',
	//'common'
//], function ($, _, Backbone, Todos, TodoView, statsTemplate, Common) {
], function ($, _, Backbone, AdminLTE, NRPTemplate) {
	'use strict';
//debugger;
	// Our overall **AppView** is the top-level piece of UI.
	var NRPView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#NRPApp',
    
    // Compile our stats template
		template: _.template(NRPTemplate),
    
    events: {
      
    },
    
    initialize: function() {
      
      //Global Variables
      /*
      var serverIp = "198.199.118.209";
      var serverPort = "8000";
      var csrftoken = ""; //Will host the CSRF token for POST calls.
      */
      
      // ***** BEGIN Backbone Models *****
      //var PersonModel = Backbone.Model.extend({
        /*  
        defaults: {
            name: "",
            nick: "",
            api_url: "",
            email: "",
            address: "unspecified",
            projects: []
          }
          */
     // });
      // ***** END Backbone Models ****

      // ***** BEGIN Backbone Model-Views *****
      /*
      var PersonView = Backbone.View.extend({ //Campaign Model-View
        tagName: 'div',
        template: _.template($('#person-template').html()),
        render: function() {
          debugger;
          //Send the Model JSON data to the template and render the template onto the page.
          this.$el.html(this.template(this.model.toJSON())); 

          return this; //enable chained calls
        },
        events: {

        },

      });
      
      // ***** END Backbone Model-Views *****

      // ***** BEGIN Backbone Collections *****
      var PeopleCollection = Backbone.Collection.extend({ model: PersonModel });
      // ***** END Backbone Models *****


      // ***** BEGIN Backbone Collection-Views *****

      // ***** END Backbone Collection-Views *****
      */
      $(document).ready( function() {

        var debugtrue = false;

        //To run this demo, open a debug console and enter 'debugtrue = true'.
        debugger;

        //Prevent code from running unintentionally.
        if(debugtrue) {


          //This shows how to retrieve database data using a typical jQuery AJAX GET call.
          //$.getJSON('http://'+serverIp+':'+serverPort+'/api/people/?format=json', '', function (data) {
          $.getJSON('http://'+serverIp+':'+serverPort+'/api/people', '', function (data) {
            debugger;
            //Data is stored in local variable 'data'
          });

          //This shows how to retrieve a Model from the database using Backbone.
          personModel = new PersonModel;
          personModel.url = 'http://'+serverIp+':'+serverPort+'/api/people';
          personModel.fetch()
          //Data is now shored in personModel.attributes

          debugger;
          //Retrieve the CSRF token. See: https://docs.djangoproject.com/en/1.4/ref/contrib/csrf/#ajax
          // using jQuery
          function getCookie(name) {
              var cookieValue = null;
              debugger;
              if (document.cookie && document.cookie != '') {
                  var cookies = document.cookie.split(';');
                  for (var i = 0; i < cookies.length; i++) {
                      var cookie = jQuery.trim(cookies[i]);
                      // Does this cookie string begin with the name we want?
                      if (cookie.substring(0, name.length + 1) == (name + '=')) {
                          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                          break;
                      }
                  }
              }
              return cookieValue;
          }
          csrftoken = getCookie('csrftoken');


          debugger;
          //This code shows how to post to the database using JavaScript to mimic an HTML form.
          //This will not work unless you are logged in.
          //Create the FormData data object and append the file to it.
          var updateForm = new FormData();
          updateForm.append('image_upload', selectedFile); //This is the raw file that was selected

          var opts = {
            url: 'http://'+serverIp+':3000/api/imageupload/create',
            data: newImage,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(data){
              console.log('Image upload ID: ' + data.image_upload._id);
            }
          };

          //Execute the AJAX operation.
          jQuery.ajax(opts);

        }

      });


      //This snippet used to collapse hamburger menu on extra-small screens.
      //Source: http://bit.ly/1N1M6r4
      $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
      }); 

    },
    
    render: function() {
      //debugger;
      
      //this.$el.html(this.template(this.model.attributes));
      this.$el.html(this.template());
      
      debugger;
      
      return this;
    }
    
    

  });

  return NRPView;
});