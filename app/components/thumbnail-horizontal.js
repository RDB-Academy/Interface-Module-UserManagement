import Ember from 'ember';

const ThumbnailHorizontal = Ember.Component.extend({});

ThumbnailHorizontal.reopenClass({
  positionalParams: ['title', 'image']
});

export default ThumbnailHorizontal;
