import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    deleteAnswer(answer){
      this.sendAction('deleteAnswer', answer);
    },
    editAnswer(answer, params) {
      this.sendAction('editAnswer', answer, params);
    }
  }
});
