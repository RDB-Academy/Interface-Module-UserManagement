import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    this.$().attr('contenteditable', true);

    var newsticker = this.$(".newsticker").newsticker();
    this.set('newsticker', newsticker);

    }

});
