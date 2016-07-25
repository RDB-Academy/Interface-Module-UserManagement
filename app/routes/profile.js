import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    console.log(params);
    //var user = this.store.query('user', {username: params.username});
    //console.log(user);

    var _this = this;
      return {
        chartData: Ember.computed('dataset', function () {

          switch (_this.activeSet) {
            case 1:
              return [1,1,1,100,1,1];
            case 2:
              return [1,100,1,1,1,1];
            case 3:
              return [1,1,1,1,1,100];
            case 4:
              return [100,1,1,1,1,1];
          }
          return [1,1,1,1,1,1];
        }),
        profileStats:{
          a: "15.14.20165",
          b: "5d 4h 32m 14s",
          c: 334,
          d: 158478,
          e: 35355,
          f: 123123,
          g: "SQL-Training"
        },
        achievements: this.store.findAll('achievement')
      };
  }
});
