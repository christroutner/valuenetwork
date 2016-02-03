/*global define*/
define([
	'jQuery-2.1.4.min',
	'underscore_1.3.3',
	'backbone_0.9.2',
	'text!../../../templates/personCard.html'
], function ($, _, Backbone, personCardTemplate) {
	'use strict';

	var PersonCardView = Backbone.View.extend({

		tagName:  'div',
    
    el: '#personCard',

		template: _.template(personCardTemplate),

		// The DOM events specific to an item.
		events: {
			//'click .toggle':	'toggleCompleted',
			//'dblclick label':	'edit',
			//'click .destroy':	'clear',
			//'keypress .edit':	'updateOnEnter',
			//'keydown .edit':	'revertOnEscape',
			//'blur .edit':		'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function () {
			//this.listenTo(this.model, 'change', this.render);
			//this.listenTo(this.model, 'destroy', this.remove);
			//this.listenTo(this.model, 'visible', this.toggleVisible);
		},

		// Re-render the titles of the todo item.
		render: function (target) {
			//debugger;
      
      this.$el = $(target);
      
      
      //this.$el.html(this.template(this.model.toJSON()));
      this.$el.html(this.template);
			//this.$el.toggleClass('completed', this.model.get('completed'));

      this.$el.find('h4').text(this.model.get('name'));
      this.$el.find('#address').text("Location: "+this.model.get('address'));
      this.$el.find('#email').text("Email: "+this.model.get('email'));
      
      //debugger;
      
      var projects = this.model.get('projects');
      var btnCnt = 0; //Used to track which button in the row we're focused on.
      //Duplicate the projects row from the template
      var projectRow = this.$el.find('.project-row').clone();
      for( var i = 0; i < projects.length; i++ ) {
        
        //Change the text of the button in the person card to match the name of the project.
        $(projectRow.find('.btn')[btnCnt]).text(projects[i].name);
        
        btnCnt++;
        if(btnCnt == 2) {
          btnCnt = 0;
          
          this.$el.append(projectRow);
          projectRow = $(this.$el.find('.project-row')[0]).clone(); //Reclone the first project-row
        }
        
      }
      this.$el.append(projectRow); //Append the last row I was working on.
      debugger;
      
      //Show all the rows
      this.$el.find('.project-row').show();
      $(this.$el.find('.project-row')[0]).hide(); //But hide the first one, which was our template.
      
			//this.toggleVisible();
			//this.$input = this.$('.edit');
			return this;
		}

		/*
    toggleVisible: function () {
			this.$el.toggleClass('hidden',  this.isHidden());
		},

		isHidden: function () {
			var isCompleted = this.model.get('completed');
			return (// hidden cases only
				(!isCompleted && Common.TodoFilter === 'completed') ||
				(isCompleted && Common.TodoFilter === 'active')
			);
		},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {
			this.model.toggle();
		},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {
			this.$el.addClass('editing');
			this.$input.focus();
		},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function () {
			var value = this.$input.val();
			var trimmedValue = value.trim();

			if (trimmedValue) {
				this.model.save({ title: trimmedValue });

				if (value !== trimmedValue) {
					// Model values changes consisting of whitespaces only are not causing change to be triggered
					// Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
					// And if yes, we've to trigger change event ourselves
					this.model.trigger('change');
				}
			} else {
				this.clear();
			}

			this.$el.removeClass('editing');
		},

		// If you hit `enter`, we're through editing the item.
		updateOnEnter: function (e) {
			if (e.keyCode === Common.ENTER_KEY) {
				this.close();
			}
		},

		// If you're pressing `escape` we revert your change by simply leaving
		// the `editing` state.
		revertOnEscape: function (e) {
			if (e.which === Common.ESCAPE_KEY) {
				this.$el.removeClass('editing');
				// Also reset the hidden input back to the original value.
				this.$input.val(this.model.get('title'));
			}
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
  */
	});

  //debugger;
	return PersonCardView;
});
