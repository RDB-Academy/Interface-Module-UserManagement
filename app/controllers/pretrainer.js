import Ember from 'ember';

export default Ember.Controller.extend({
  difficulty: 20,
  categorie: 20,
  bonus: 1,
  customize: false,

  multiplicator: Ember.computed('difficulty', 'bonus', 'categorie', function() {
    var value1 = this.get('difficulty');
    var value2 = this.get('categorie');
    var value3 = this.get('bonus');
    if(this.get('customize')){
      return Math.ceil((value2) * value3);
    }else{
      return Math.ceil((value1) * value3);
    }
  }),

  actions: {
    setDifficulty: function() {
      var value = parseInt(jQuery('#ex1').val()) *20;
      this.set('difficulty', value);
      this.set('customize', false);
      jQuery('#CategoriePanel')[0].hidden = true;
      jQuery('#CustomizePanel')[0].hidden = false;
    },
    setBonus: function(id) {
      var value = jQuery('input:checkbox[name="bonus'+id+'"]').val();
      var bonus = this.get('bonus');
      if(jQuery('input:checkbox[name="bonus'+id+'"]')[0].checked){
        this.set('bonus', bonus - (parseInt(value)/100));
      }else{
        this.set('bonus', bonus + (parseInt(value)/100));
      }
    },
    setCategorie: function(id) {
      var value = parseInt(jQuery('input:checkbox[name="bonus'+id+'"]').val());
      var categorie = this.get('categorie');
      if(jQuery('input:checkbox[name="bonus'+id+'"]')[0].checked){
        this.set('categorie', categorie + value);
      }else{
        this.set('categorie', categorie - value);
      }
    },
    start: function() {
      console.log(jQuery('#ex1').val());
    },
    customize: function() {
      jQuery('#CategoriePanel')[0].hidden = false;
      jQuery('#CustomizePanel')[0].hidden = true;

      jQuery('#ex1')[0].value = 1;
      this.set('difficulty', 20);
      this.set('customize',true);

    }
  }
});
