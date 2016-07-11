import Ember from 'ember';

var difficulty = 0;


export default Ember.Route.extend({

  actions: {
        routeaction:  function(Check1, Check2) {
               console.log($('#inlineCheckbox1')[0].checked);
        },
        kahn: function() {
               console.log($('#inlineCheckbox3')[0].checked);
               console.log($('#score')[0].innerText);
               difficulty++;
               $('#score').text(difficulty+"%");
        }
    }
});
