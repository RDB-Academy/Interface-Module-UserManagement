import Ember from 'ember';

const AchievementBig = Ember.Component.extend({
  tagName: 'li',
  classNames: ['achievement', 'collapsed'],
  classNameBindings: ['done'],

  attributeBindings: ['dataTarget:data-target', 'dataToggle:data-toggle'],

  dataTarget: Ember.computed('achievement', function() {
    return "#" + this.get('achievement').id;
  }),

  dataToggle: 'collapse',

  progress: Ember.computed('achievement', function() {
    let progressNow  = this.get('achievement').value;
    let progressMax  = this.get('achievement').maxValue;
    return progressNow / progressMax * 100;
  }),

  progressString: Ember.computed('achievement', function() {
    let progressNow  = this.get('achievement').value;
    let progressMax  = this.get('achievement').maxValue;
    return progressNow + "/" + progressMax;
  }),

  done: Ember.computed('progress', function() {
    let percent = this.get("progress");
    return percent === 100;
  }),

  style: Ember.computed('progress', function() {
    let percent = this.get("progress");
    return new Ember.Handlebars.SafeString(`width: ${percent}%`);
  }),

  actions: {
    achievementShow() {
      this.set('isShowing', true);
    },

    achievementHide() {
      this.set('isShowing', false);
    }
  }
});

AchievementBig.reopenClass({
  positionalParams: ['achievement']
});

export default AchievementBig;
