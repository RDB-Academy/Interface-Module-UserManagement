import Ember from 'ember';

const QuestComponent = Ember.Component.extend({
  progress: Ember.computed('quest', function () {
    if (this.get('quest')) {
      console.log("changing");
      return ( this.get('quest').get('valueNow') - this.get('quest').get('valueMin') ) /
      ( this.get('quest').get('valueMax') - this.get('quest').get('valueMin') );
    } else {
      return null;
    }
  }),

  progressStyle: Ember.computed('progress', function() {
    console.log("progressStyle invoked");
    console.log(this.get('progress'));
    return Ember.String.htmlSafe('width: ' + this.get('progress') * 100 + '%');
  }),

  colorMode: Ember.computed('progress', function() {
    console.log(this.get('progress'));
    if (this.get('progress') < 0.3) {
      return 'danger';
    } else if (this.get('progress') < 0.6) {
      return 'warning';
    } else if (this.get('progress') < 1){
      return 'success';
    } else {
      return 'info';
    }
  })
});

QuestComponent.reopenClass({
  positionalParams : ['quest']
});

export default QuestComponent;
