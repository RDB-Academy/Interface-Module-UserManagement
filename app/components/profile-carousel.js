import Ember from 'ember';

const ProfileCarousel = Ember.Component.extend({
  didRender() {
    this.target = this._targetObject;
    var carouselCtx = this.$("#myCarousel");
    console.log(carouselCtx);
    var _this = this;
    carouselCtx.on("slide.bs.carousel", function(){
      _this.send('chartDataChanger', _this.get("data"));
    })
  }

});

ProfileCarousel.reopenClass({
  positionalParams: ["data"]
})

export default ProfileCarousel;
