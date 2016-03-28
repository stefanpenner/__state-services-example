import DS from 'ember-data';
const PULLS = [
  { id: 1, name: 'pull-1 '},
  { id: 2, name: 'pull-2 '},
  { id: 3, name: 'pull-3 '},
];

export default DS.Adapter.extend({
  findAll() {
    return PULLS.slice();
  },

  findRecord(store, type, id) {
    return PULLS.findBy('id', id);
  }
});
