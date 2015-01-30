import DS from "ember-data";

// export default DS.LSAdapter.extend({}); This stored data on local browser storage.

export default DS.ActiveModelAdapter.extend({
  host: 'http://notes-api-sw.herokuapp.com/'
});
