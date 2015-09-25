import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogposts: this.store.findAll('question'),
      comments: this.store.findAll('answer')
    });
  },

  actions: {
    save(params){
      var newBlogpost = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blogpost.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(blogpost) {
      blogpost.get('answers').forEach(function(answer){
        answer.destroyRecord();
      });
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
