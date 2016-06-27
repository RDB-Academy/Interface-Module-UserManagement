import Ember from 'ember';

const ProfileChartBottom = Ember.Component.extend({
  tagName: "canvas",

  chart:null,

  chartDataChanger: function() {
    if (this.chart != null) {
      this.chart.data.datasets[0].data = this.get('chart_data');
      this.chart.update();
    }
  }.observes('chart_data'),


  didRender(){
    Chart.defaults.global.legend.position = "bottom";
    //Chart.defaults.global.legend.position.labels.padding = 0;

    var ctx = this.$()[0];
    ctx.onselectstart = function() {return false;};
    ctx.height = 3/8*ctx.width;

    //setTimeout(function(){this.bla=[2,1,4,3,6,5];}, 800);

    this.set('chart', new Chart(ctx, {
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
            data: this.get('chart_data')
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
      })
    );

    this.set('chart_data', [1,5,2,3,1,2,2]);
  },

  actions: {
    userclickedIt() {
    }
  }


});

ProfileChartBottom.reopenClass({
  positionalParams: ['chart_data']
});

export default ProfileChartBottom;
