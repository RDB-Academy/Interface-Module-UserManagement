import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  //id:           attr('string'),
  title:        attr('string'),
  description:  attr('string'),
  image:        attr('string'),
  achievedAt:   attr('date'),
  valueMin:     attr('number'),
  valueMax:     attr('number'),
  valueNow:     attr('number'),
  points:       attr('number')
});
