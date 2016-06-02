import Ember from 'ember';

var achievements = [
  {
    id: 1,
    title: "Master of SQL",
    description: "Do 1000 SQL Statements",
    image: "img/achievement-logo-01.jpg",
    achievedAt: "01.06.2016",

    minValue: 0,
    maxValue: 1000,
    value: 1000,
    points: 20
  },
  {
    id: 2,
    title: "Master of RA",
    description: "Do 1000 RA Statements",
    image: "img/achievement-logo-01.jpg",
    minValue: 0,
    maxValue: 1000,
    value: 100,

    points: 20
  },
  {
    id: 3,
    title: "Master of TRC",
    description: "Do 1000 TRC Tasks",
    image: "img/achievement-points-01.png",

    minValue: 0,
    maxValue: 1000,
    value: 0,

    points: 50
  }
];

export default Ember.Route.extend({
  model() {
    return achievements;
  }
});
