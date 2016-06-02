export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

  this.get('/achievements', function() {
    return {
      data: [
        {
          type: 'achievements',
          id: 1,
          attributes: {
            title: "Master of SQL",
            description: "Do 1000 SQL Statements",
            image: "img/achievement-logo-01.jpg",
            'achieved-at': "01.06.2016",
            'value-min': 0,
            'value-max': 1000,
            'value-now': 1000,
            points: 20
          }
        },
        {
          type: 'achievements',
          id: 2,
          attributes: {
            title: "Master of RA",
            description: "Do 1000 RA Statements",
            image: "img/achievement-logo-01.jpg",
            'value-min': 0,
            'value-max': 1000,
            'value-now': 100,
            points: 20
          }
        },
        {
          type: 'achievements',
          id: 3,
          attributes: {
            title: "Master of TRC",
            description: "Do 1000 TRC Tasks",
            image: "img/achievement-points-01.png",
            'value-min': 0,
            'value-max': 1000,
            'value-now': 0,
            points: 50
          }
        }
      ]
    }
  })
}
