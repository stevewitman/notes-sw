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
        this.flashMessage("", "Note was saved.");
      } else if (!title.trim()) {
        this.flashMessage("", "Title can't be blank.");
      } else {
        this.flashMessage("", "Body can't be blank.");
      }
    },
    deleteNote: function(note_id) {
      this.store.find('note', note_id).then((function(note) {
        note.deleteRecord();
        note.save();
        this.flashMessage("", "Note was deleted.");
      }).bind(this))
    },
  }
});
