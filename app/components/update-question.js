import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestionHide() {
      this.set('updateQuestionForm', false);
    },

    update(quesiton) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content')
      }
      this.set('updateQuestionForm', false);
      this.sendAction('update', quesiton, params);
    }
  }
});
