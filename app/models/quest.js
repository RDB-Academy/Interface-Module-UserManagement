import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title:        attr('string'),
  valueMin:     attr('number'),
  valueMax:     attr('number'),
  valueNow:     attr('number'),
  points:       attr('number')
});
