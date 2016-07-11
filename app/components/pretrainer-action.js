import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    watchFoo: function(){
      console.log('Test changed');
    }.observes('Test')
}
});
