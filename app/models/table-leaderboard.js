import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  position: attr('number'),
  image:    attr('string'),
  username: attr('string'),
  value:    attr('number')
});
