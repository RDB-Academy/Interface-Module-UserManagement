import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',

    didRender() {
      Chart.defaults.global.legend.position = "bottom";

      var ctx = this.$()[0];
      ctx.height = ctx.width;
      console.log(ctx);
      new Chart(ctx, {
        type: 'radar',
        data : {
        labels: ["RA", "SQL", "TRC"],
        datasets: [
          {
            label: "You",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90]
          },
          {
            label: "ProfileOwner",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40]
          }
        ]
      },
      options : {
        scale: {
          ticks: {
            display: false
          }
        }
      }
    });
  }
});
