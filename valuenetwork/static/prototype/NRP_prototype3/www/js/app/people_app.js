define([
	'jQuery-2.1.4.min',
	'underscore_1.3.3',
	'backbone_0.9.2',
  'bootstrap.min',
	'../app/views/peopleLeftMenu',
  '../app/views/personCard',
  '../app/views/peopleList',
  'adminlte'
], function ($, _, Backbone, Bootstrap, PeopleLeftMenu, PersonCardView, PeopleListView, AdminLTE) {

  //Global Variables
  global = new Object(); //Creates a global variables. All global variables in this program are properties of this variable.
  global.serverIp = "198.199.118.209";
  global.serverPort = "8000";
  //var csrftoken = ""; //Will host the CSRF token for POST calls.
  
  
  debugger;

  //tempModel is used to retrieve/upload/sync data from the NRP server
  //Data other than just the models are uploaded, which is why my models and view configuration
  //is nested insite NRPPeopleModel.
  var NRPPeopleModel = Backbone.Model.extend({
    initialize: function() {
      debugger;
      this.on('change', function(){
          debugger;
          //Create a new collection based on the data retrieved from the NRP.
          var PersonModel = Backbone.Model.extend({});
          var PeopleCollection = Backbone.Collection.extend({ model: PersonModel });
          peopleCollection = new PeopleCollection(nrpPeopleModel.attributes.results); //no 'var', which makes this a global variable.
        
          //Initialize the List of People
          var peopleListView = new PeopleListView({collection: peopleCollection});
          peopleListView.render();
        
          
        
          //debugger;
      });
    }
  });
  
  //var nrpPeopleModel = new NRPPeopleModel;
  //nrpPeopleModel.url = 'http://'+global.serverIp+':'+global.serverPort+'/api/people';
  //nrpPeopleModel.fetch();
  
  
  var NRPPersonModel = Backbone.Model.extend({
    //Initialize is called upon the instantiation of this model. This function is executed once
    //per model retrieved from the server.
    initialize: function() {
      
      //Save model data to the database when it gets changed.
      this.on('change', function() {
        debugger;        
        this.save();
      });

      //Is this the correct URL for updating model data?
      this.url = 'http://'+global.serverIp+':'+global.serverPort+'/api/people';
    },
    
    //Override the default Backbone save() function with one that our API understands.
    save: function() {
      debugger;
      
      //To-Do code. Figure out what AJAX call needs to happen to update data in the database.

    }
    
  });
  var NRPPeopleCollection = Backbone.Collection.extend({
    model: NRPPersonModel,
    url: 'http://'+global.serverIp+':'+global.serverPort+'/api/people',
    parse: function(response) {
      debugger;
      
      this.next = response.next;
      this.previous = response.previous;
      this.count = response.count;
      return response.results
    },
    initialize: function() {
      this.on('reset', function() {
        //'reset' events any time I completely reload the data in the Collection, including the first time the data is fetched from the server.
        
        debugger;
        
        //Initialize the List of People
        global.peopleListView = new PeopleListView({collection: global.nrpPeopleCollection});
        global.peopleListView.render();

      });
    }
  });
  
  //Instantiate the collection and fetch data from the server.
  global.nrpPeopleCollection = new NRPPeopleCollection();
  global.nrpPeopleCollection.fetch();
  
  
  
  
  //Data is now shored in nrpPeopleModel.attributes.results[]
  
  
  var peopleLeftMenuView = new PeopleLeftMenu();
  peopleLeftMenuView.render();

  //var personCardView = new PersonCardView({model: peopleCollection.models[0]});
  //personCardView.render();
  
  
        
});
