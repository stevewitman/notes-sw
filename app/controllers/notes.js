import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');

      var note = this.store.createRecord('note', { body: body, title: title });
      this.set('noteCopy', '');
      note.save();
    }
  }
});
