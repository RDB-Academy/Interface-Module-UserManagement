import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "canvas",

  didRender(){
    Chart.defaults.global.legend.position = "bottom";
    //Chart.defaults.global.legend.position.labels.padding = 0;
    console.log(Chart.defaults.global.legend);


    var ctx = this.$()[0];
    ctx.onselectstart = function() {return false};
    ctx.height = 3/8*ctx.width;
    new Chart(ctx, {
      type: 'line',
      data : {
        labels: ["6","5","4","3", "2","1","0"],
        datasets: [
          {
            label: "You",
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
