import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
      console.log("didRender");
      this._super(...arguments);
      this.$('#example').vTicker();
    }
});
