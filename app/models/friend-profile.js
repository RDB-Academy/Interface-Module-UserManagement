import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  username:       attr('string'),
  image:          attr('string'),
  points:          attr('number'),
  title:          attr('string')
});
