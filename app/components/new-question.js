import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    questionFormHide() {
      this.set('addNewQuestion', false);
    },

    save() {
      var params ={
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content')
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params);
    }
  }
});
