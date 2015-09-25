import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        username: this.get('username'),
        date: this.get('date'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
