import Ember from 'ember';

export default Ember.Route.extend({
  activeSet: 1,
  model() {
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
        array:[1,1,1,1,1,1],

      };
  },
  dostuff: function() {
    console.log(this.get('chartData'));
  }.observes('chartData'),
  actions: {
    chartDataChanger() {
      console.log(this.model);
      this.set("activeSet", (this.get("activeSet") % 4) + 1);
      this.refresh();
      //this.model.set('chartData', data)
    }
  }
});
