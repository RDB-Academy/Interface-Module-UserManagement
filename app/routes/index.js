import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      applications: this.store.findAll('module-application'),
      features: this.store.findAll('feature'),
      leaderboards: this.store.findAll('table-leaderboard')
    };
  }
});
