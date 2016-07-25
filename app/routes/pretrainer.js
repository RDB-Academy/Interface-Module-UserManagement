import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      achievements: this.store.findAll('achievement'),
      quests: this.store.findAll('quest'),
      leaderboard: this.store.findAll('table-leaderboard')
    });
  }
});
