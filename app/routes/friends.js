import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {a:this.store.findAll('friend-request'), b:this.store.findAll('friend-profile')};
  }
});
