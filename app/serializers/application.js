import JSONSerializer from 'ember-data/serializers/json';
import Ember from 'ember';

export default JSONSerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.camelize(attr);
  }
});
