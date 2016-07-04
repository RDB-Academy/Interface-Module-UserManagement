import Ember from 'ember';

const AchievementSmall = Ember.Component.extend({
  id: Ember.computed('achievement', function() {
    return this.get('achievement').id;
  }),

  classNames: ['achievement-small'],
  classNameBindings: ['done'],

  progress: Ember.computed('achievement', function() {
    let progressNow  = this.get('achievement').get('valueNow');
    let progressMax  = this.get('achievement').get('valueMax');
    return progressNow / progressMax;
  }),

  done: Ember.computed('progress', function() {
    let percent = this.get("progress");
    return percent === 100;
  }),
  didInsertElement() {
    console.log(this.$());
    this.$().circleProgress({
      value: this.get('progress'),
      size:90,
      startAngle: -Math.PI / 2,
      fill: {
        gradient: ["red", "orange"]
      }
    });
  },
  actions: {
  }
});

AchievementSmall.reopenClass({
  positionalParams: ['achievement']
});

export default AchievementSmall;
