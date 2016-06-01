import Ember from 'ember';

const AchievementBig = Ember.Component.extend({});

AchievementBig.reopenClass({
  positionalParams: ['achievement']
});

export default AchievementBig;
