import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this._super(...arguments);
    this.$('#ex1').slider({
      ticks: [1,2,3,4,5],
      //ticks_labels: ["easy","normal","moderate","hard","impossible"],
    	formatter: function(value) {
    		return 'Difficulty: ' + value;
    	}
    });
  },
  actions: {
    setDifficulty: function() {
      var value = parseInt(jQuery('#ex1').val());
      this.set('difficulty', value);
      this.get('onConfirm')();
    }
  }

});
