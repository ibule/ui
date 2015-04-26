import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('service');
  },

  setupController: function(controller, model) {
    controller.set('originalModel',model);
    controller.set('model', model.clone());
    controller.initFields();
  },

  renderTemplate: function() {
    this.render('service/edit', {into: 'application', outlet: 'overlay'});
  },

  actions: {
    cancel: function() {
      this.goToPrevious();
    },
  }
});
