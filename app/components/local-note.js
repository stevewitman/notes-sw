import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['note'],

  actions: {
    deleteNote: function(id) {
      this.sendAction('deleteNote', id);
    }
  }
});

// **************** Try this from Aaron on friday afternoon ****************  
// export default Ember.Component.extend({
//   tagName: 'article',
//
//   actions: {
//     deleteNote: function(note) {
//       this.sendAction('deleteNote', note);
//     }
//   }
// });
