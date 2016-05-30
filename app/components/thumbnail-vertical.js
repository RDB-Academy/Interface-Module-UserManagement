import Ember from 'ember';

const ThumbnailVertical = Ember.Component.extend({});

ThumbnailVertical.reopenClass({
  positionalParams: ['title', 'image', 'isLeft']
});

export default ThumbnailVertical;
