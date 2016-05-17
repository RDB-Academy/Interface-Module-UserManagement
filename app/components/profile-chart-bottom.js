import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "canvas",

  didRender(){
    Chart.defaults.global.legend.position = "bottom";
    //Chart.defaults.global.options.scale.ticks.suggestedMax = 1;
    //Chart.defaults.global.options.scale.ticks.beginAtZero: true;

    var ctx = this.$()[0];
    ctx.onselectstart = function() {return false};
    ctx.height = 1/3*ctx.width;
    new Chart(ctx, {
      type: 'line',
      data : {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
          }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 100
                }
            }]
        }
    }
    });
  }

});
