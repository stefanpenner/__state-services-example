import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

export default Ember.Component.extend({
  pull: null, // pull request provided via attr
  data: stateFor('comment-draft'/* name of data bucket */, 'pull' /* path to key */)
});
