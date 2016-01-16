//Global Variables
serverIp = "192.168.56.101";
serverPort = "8000";

// ***** BEGIN Backbone Models *****
var PersonModel = Backbone.Model.extend({
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
});
// ***** END Backbone Models ****

// ***** BEGIN Backbone Model-Views *****
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
    
    
    
  }
  
});