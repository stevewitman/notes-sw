import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy') || '';
      var title = this.get('noteTitle') || '';
      if (body.trim() && title.trim()) {
        var note = this.store.createRecord('note', { body: body, title: title });
        this.set('noteTitle', '');
        this.set('noteCopy', '');
        note.save();
        this.flashMessage("success", "Note was saved.");
      } else if (!title.trim()) {
        this.flashMessage("warning", "Title can't be blank.");
      } else {
        this.flashMessage("warning", "Body can't be blank.");
      }
    },

    deleteNote: function(note) {
      note.destroyRecord();
      this.flashMessage("success", "Note was deleted.");
    }
  }
});
