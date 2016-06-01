import Ember from 'ember';

var achievements = [
  {
    id: 1,
    title: "Master of SQL",
    description: "Do 1000 SQL Statements",
    image: "img/achievement-logo-01.jpg",

    done: true,
    achievedAt: "01.06.2016",
    progress: "100",
    progressLarger50: true,
    progressString: "1000/1000",
    points: 20
  },
  {
    id: 2,
    title: "Master of RA",
    description: "Do 1000 RA Statements",
    image: "img/achievement-logo-01.jpg",

    progress: "50",
    progressLarger50: true,
    progressString: "500/1000",
    points: 20
  },
  {
    id: 3,
    title: "Master of TRC",
    description: "Do 1000 TRC Tasks",
    image: "img/achievement-points-01.png",

    progress: "10",
    progressLarger50: false,
    progressString: "100/1000",
    points: 50
  }
];

export default Ember.Route.extend({
  model() {
    return achievements;
  }
});
