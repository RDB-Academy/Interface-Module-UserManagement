import Ember from 'ember';

export default Ember.Controller.extend({
  password: "",



  actions: {
    checkAccountReset() {
      var password = this.get('passwordR');
      console.log(password);

      if (password === 'reset') {
        jQuery('#resetModal').modal('show');
      }
    },
    resetProfile() {
      var reset = this.get('resetProfile');
      console.log(reset);

      if(reset.toLowerCase() === 'reset') {
        console.log('Reset Successful!');
      }
    },
    checkAccountDeletion() {
      var password = this.get('passwordD');
      console.log(password);

      if (password === 'delete') {
        jQuery('#deleteModal').modal('show');
      }
    },
    deleteProfile() {
      var deletion = this.get('deleteProfile');
      console.log(deletion);

      if (deletion.toLowerCase() === 'delete') {
        console.log('Deletion Successful!');
      }
    }
  }

});
