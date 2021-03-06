import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm('Are you sure you want to delete this piece of art?')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
