import Ember from 'ember';

export default Ember.Controller.extend({
  difficulty: 20,
  bonus: 1,

  multiplicator: Ember.computed('difficulty', 'bonus', function() {
    var value1 = this.get('difficulty');
    var value2 = this.get('bonus');
    return Math.ceil(value1 * value2);
  }),

  actions: {

    setDifficulty: function() {
      var value = jQuery('input:radio[name="difficulty"]:checked').val();
      console.log(value);
      this.set('difficulty', parseInt(value));
    },
    setBonus: function(id) {
      var value = jQuery('input:checkbox[name="bonus'+id+'"]').val();
      var bonus = this.get('bonus');
      if(jQuery('input:checkbox[name="bonus'+id+'"]')[0].checked){
        this.set('bonus', bonus + (parseInt(value)/100));
      }else{
        this.set('bonus', bonus - (parseInt(value)/100));
      }
    }
  }
});
