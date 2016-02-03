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
  serverIp = "198.199.118.209";
  serverPort = "8000";
  var csrftoken = ""; //Will host the CSRF token for POST calls.
  
  
  //debugger;

  //tempModel is used to retrieve/upload/sync data from the NRP server
  //Data other than just the models are uploaded, which is why my models and view configuration
  //is nested insite NRPPeopleModel.
  var NRPPeopleModel = Backbone.Model.extend({
    initialize: function() {
      this.on('change', function(){
          
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
  var nrpPeopleModel = new NRPPeopleModel;
  nrpPeopleModel.url = 'http://'+serverIp+':'+serverPort+'/api/people';
  nrpPeopleModel.fetch();
  //Data is now shored in nrpPeopleModel.attributes.results[]
  
  
  var peopleLeftMenuView = new PeopleLeftMenu();
  peopleLeftMenuView.render();

  //var personCardView = new PersonCardView({model: peopleCollection.models[0]});
  //personCardView.render();
  
        
});
