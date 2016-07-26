import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  type: 'radar',

  owner: null,

  dataSet: Ember.computed('owner', function() {
    var owner = this.get('owner');
    var data = [];
    var i = 0;
    for(var name in owner) {
      if(name !== 'username') {
        data[i++] = owner[name];
      }
    }

    console.log(data);

    return {
      labels: ["SQL", "RA", "Task / Time Ratio"],
      datasets: [
        {
          label: owner.username,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: data
        }
      ]
    };
  }),

  didInsertElement: function(){
    var ctx = this.$()[0];
    var data = this.get('dataSet');
    console.log(data);
    ctx.height = ctx.width;

    new Chart(ctx,{
      type: this.get('type'),
      data : data,
      options : {
        scale: {
          ticks: {
            beginAtZero: true,
            display: false
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    });

    console.log(ctx);
  }
});
