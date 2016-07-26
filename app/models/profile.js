import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr("string"),
  emailAddress: attr("string"),

  globalStats: attr(""),
  profileRadar: attr(""),

  profileImage: attr("string"),
  profileTitle: attr("string"),
});
