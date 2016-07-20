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
            'achieved-at': "2014-04-25T01:32:21.196Z",
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

  this.get('/pretrainer', function() {
    return {
      data: [
        {
          type: 'pretrainer',
          id: 1,
          attributes: {
            title: "TEST",
            difficulty: 20
          }
        }
      ]
    }
  })

  this.get('/quests', function () {
    return {
      data: [
        {
          type: 'quests',
          id: 1,
          attributes: {
            title: "Finish 5 Sql-Statements",
            'value-min': 0,
            'value-max': 5,
            'value-now': 2,
            points: 20
          }
        },
        {
          type: 'quests',
          id: 2,
          attributes: {
            title: "Finish 3 Statements in under 20 seconds",
            'value-min': 0,
            'value-max': 3,
            'value-now': 3,
            points: 20
          }
        }
      ]
    }
  })

  this.get('/module-applications', function() {
    return {
      data: [
        {
          type: 'module-applications',
          id: 1,
          attributes: {
            title: 'App1',
            description: 'description1',
            image: 'img/gamification-word-cloud.jpg'
          },
        },
        {
          type: 'module-applications',
          id: 2,
          attributes: {
            title: 'App2',
            description: 'description2',
            image: 'img/gamification-word-cloud.jpg'
          },
        },
        {
          type: 'module-applications',
          id: 3,
          attributes: {
            title: 'App3',
            description: 'description3',
            image: 'img/gamification-word-cloud.jpg'
          },
        },
      ]
    }
  })

  this.get('/features', function() {
    return {
      data: [
        {
          type: 'features',
          id: 1,
          attributes: {
            title: 'Gameification',
            image: 'img/gamification-word-cloud.jpg',
            description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
          }
        },
        {
          type: 'features',
          id: 2,
          attributes: {
            title: 'Irgendwas tolles ?',
            image: 'img/gamification-word-cloud.jpg',
            description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'
          }
        }
      ]
    }
  })

  this.get('/friend-profiles', function() {
    return {
      data: [
        {
          type: 'friend-profiles',
          id: 1,
          attributes: {
            username: 'Username1',
            image: 'img/identicon.png',
            points: 1000
          //  <!--Time Spent, Total Tasks, Total Points -->
          }
        },
        {
          type: 'friend-profiles',
          id: 2,
          attributes: {
            username: 'Username2',
            image: 'img/identicon.png',
            points: 1000
          }
        },
        {
          type: 'friend-profiles',
          id: 3,
          attributes: {
            username: 'Username3',
            image: 'img/identicon.png',
            points: 1000
          }
        },
        {
          type: 'friend-profiles',
          id: 4,
          attributes: {
            username: 'Username4',
            image: 'img/identicon.png',
            points: 1000
          }
        }
      ]
    }
  })

  this.get('/friend-requests', function() {
    return {
      data: [
        {
          type: 'friend-requests',
          id: 1,
          attributes: {
          username: 'FriendRequest1',
          image: 'img/identicon.png'
          }
        },
        {
          type: 'friend-requests',
          id: 2,
          attributes: {
          username: 'FriendRequest2',
          image: 'img/identicon.png'
          }
        },
        {
          type: 'friend-requests',
          id: 3,
          attributes: {
          username: 'FriendRequest3',
          image: 'img/identicon.png'
          }
        }
      ]
    }
  });
}
