import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
      this._super(...arguments);

      function setInitialOpacities() {
        var ul = jQuery('#before-tick ul');
        ul.children('li:nth-child(1)').css("opacity", 0.1);
        ul.children('li:nth-child(2)').css("opacity", 1);
        ul.children('li:nth-child(3)').css("opacity", 0.1);
      }

      this.$('#before-tick').vTicker({showItems: 3, padding: 0, pause: 5000});
      setInitialOpacities();
      this.$('#before-tick').on('vticker.beforeTick', function() {
          var ul = jQuery('#before-tick ul');
          var interval = 500;
          var colours = ["green", "red", "black", "yellow"];
          var randomColour = colours[Math.floor(Math.random() * 3)];

          ul.children('li:nth-child(1)').animate({opacity: 0.05}, interval);
          ul.children('li:nth-child(1)').css("color", randomColour);
          ul.children('li:nth-child(2)').animate({opacity: 0.1}, interval);
          ul.children('li:nth-child(2)').css("color", randomColour);
          ul.children('li:nth-child(3)').animate({opacity: 1}, interval);
          ul.children('li:nth-child(3)').css("color", randomColour);
          ul.children('li:nth-child(4)').css("opacity", 0.1);
          ul.children('li:nth-child(4)').css("color", randomColour);
      });


    }



});
