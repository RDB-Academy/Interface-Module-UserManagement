import Mirage from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  this.timing = 200;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

/*****************************************************************************************************\
|*  Auth API
\*****************************************************************************************************/
  this.post('/login', (schema, request) => {
    var data = JSON.parse(request.requestBody);
    var profileQuery, sessionQuery;
    var profile, session;
    var response;

    if(  typeof data.emailAddress === 'undefined'
      || typeof data.password     === 'undefined') {

        return new Mirage.Response(400);
      }

    profileQuery = schema.profiles.where({
      emailAddress: data.emailAddress
    });

    if(profileQuery.models.length === 0 || profileQuery.models[0].attrs.password !== data.password) {
      response = new Mirage.Response(400, {}, {
        errors: [
          {
            field: "loginForm",
            error: "Wrong Email or Password"
          }
        ]
      });
      return response;
    }

    profile = profileQuery.models[0].attrs;

    delete profile.password;

    sessionQuery = schema.sessions.where({
      profileId: profile.id
    });

    if(profile.id === "1") {
      if(sessionQuery.models.length > 0) {
        session = sessionQuery.models[0].attrs;
        session.profile = profile;
        return session;
      }
    }

    if(sessionQuery.models.length > 0) {
      console.log("Session/s found");
      for(var i = 0; i < sessionQuery.models.length; i++) {
        var sessionI = sessionQuery.models[i];
        sessionI.isActive = 0;
        sessionI.save();
      }
    }

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    session = schema.sessions.create({
      id: schema.sessions.all().models.length,
      token: guid(),
      profileId: profile.id,
      expiresAt: tomorrow,
      createdAt: new Date(),
      isActive: 1
    });

    response = session.attrs;

    response.profile = profile;

    return response;
  })

  this.post('/logout', (schema, request) => {
    var data = JSON.parse(request.requestBody);
    var sessionQuery;
    var session;

    if(typeof data.sessionToken === 'undefined') {
      return new Mirage.Response(400);
    }

    sessionQuery = schema.sessions.where({token: data.sessionToken});

    if(sessionQuery.models.lengt === 0) {
      return new Mirage.Response(404);
    }

    session = sessionQuery.models[0];

    session.isActive = 0;
    session.isInvalid = 1;
    session.save();
  })

  this.post('/restore', (schema, request) => {
    var data = JSON.parse(request.requestBody);
    var profileQuery, sessionQuery;
    var sessionModel, session;

    if(typeof data.sessionToken === 'undefined') {
      return new Mirage.Response(400);
    }

    sessionQuery = schema.sessions.where({token: data.sessionToken});

    if(sessionQuery.models.length === 0) {
      return new Mirage.Response(404);
    }

    sessionModel = sessionQuery.models[0];
    session = sessionModel.attrs;

    if(session.isInvalid === 1) {
      console.log("invalid");
      return new Mirage.Response(400);
    }
    session.profile = sessionModel.profile.attrs;
    delete session.profile.password;

    return session;
  });

/*****************************************************************************************************\
|*  Profile API
\*****************************************************************************************************/
  this.head('/profiles', (schema, request) => {
    if(typeof request.queryParams != 'undefined') {
      var profiles;
      if(typeof request.queryParams.username != 'undefined') {
        profiles = schema.profiles.where({username: request.queryParams.username});
      } else if(typeof request.queryParams.emailAddress != 'undefined') {
        profiles = schema.profiles.where({emailAddress: request.queryParams.emailAddress});
      } else {
        return new Mirage.Response(400);
      }
      if(profiles.models.length === 0) {
        return new Mirage.Response(404);
      } else {
        return new Mirage.Response(200);
      }
    }
    return new Mirage.Response(400);
  })

  this.get('/profiles/:username', (schema, request) => {
    var username = request.params.username;
    var profileQuery = schema.profiles.where({username: username});
    var profile;

    if(profileQuery.models.length === 0) {
      return new Mirage.Response(404);
    }

    profile = profileQuery.models[0].attrs;

    delete profile.password;

    return profile;
  })

  this.post('/profiles', (schema, request) => {
    var data = JSON.parse(request.requestBody)
    var profile;
    var response = {errors: []};
    var responseIterator = 0;
    var profileWithUsername, profileWithEmailAddress;

    if(  typeof data.username === 'undefined'
      || typeof data.emailAddress === 'undefined'
      || typeof data.password === 'undefined') {

      return new Mirage.Response(400, {
        errors: [
          {
            field: "username",
            error: "username is required"
          },
          {
            field: "emailAddress",
            error: "emailAddress is required"
          },
          {
            field: "password",
            error: "password is required"
          }
        ]
      });
    }

    profileWithUsername = schema.profiles.where({
      username:  data.username
    });
    profileWithEmailAddress = schema.profiles.where({
      emailAddress:  data.emailAddress
    });

    if(profileWithUsername.models.length) {
      response.errors[responseIterator++] = {field: "username", error: "username is already in use"};
    }
    if(profileWithEmailAddress.models.length) {
      response.errors[responseIterator++] = {field: "emailAddress", error: "email is already in use"};
    }
    if(responseIterator > 0) {
      return new Mirage.Response(400, {}, response);
    }

    profile = schema.profiles.create(data);
    return {profileId: profile.id};
  })

/*****************************************************************************************************\
|*  Template API
\*****************************************************************************************************/

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
            title: 'SQL',
            description: 'description1',
            image: 'img/sql_blue.png'
          },
        },
        {
          type: 'module-applications',
          id: 2,
          attributes: {
            title: 'RA',
            description: 'description2',
            image: 'img/sql_red.png'
          },
        },
        {
          type: 'module-applications',
          id: 3,
          attributes: {
            title: 'App3',
            description: 'description3',
            image: 'img/sql_green.png'
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
            title: 'Master of SQL',
            points: 1000
          }
        },
        {
          type: 'friend-profiles',
          id: 2,
          attributes: {
            username: 'Username2',
            image: 'img/identicon.png',
            title: 'Nerd',
            points: 1000
          }
        },
        {
          type: 'friend-profiles',
          id: 3,
          attributes: {
            username: 'Username3',
            image: 'img/identicon.png',
            title: 'Beginner',
            points: 1000
          }
        },
        {
          type: 'friend-profiles',
          id: 4,
          attributes: {
            username: 'Username4',
            image: 'img/identicon.png',
            points: 1000,
            title: 'Caaaarl'
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
  })

    this.get('/table-leaderboards', function() {
      return {
        data: [
          {
            type: 'table-leaderboards',
            id: 1,
            attributes:{
            position: 1,
            username: 'Nicole Friebe',
            image: 'img/identicon.png',
            value: 123453
            }
          },
          {
            type: 'table-leaderboards',
            id: 2,
            attributes:{
            position: 2,
            username: 'Gabriel Mazzone',
            image: 'img/identicon.png',
            value: 1453
            }
          },
          {
            type: 'table-leaderboards',
            id: 3,
            attributes:{
            position: 3,
            username: 'Carl Van der Wall',
            image: 'img/identicon.png',
            value: 145
            }
          },
          {
            type: 'table-leaderboards',
            id: 4,
            attributes:{
            position: 4,
            username: 'Ronja Naßkz',
            image: 'img/identicon.png',
            value: 15
            }
          },
          {
            type: 'table-leaderboards',
            id: 5,
            attributes:{
            position: 5,
            username: 'Fabio Ahlers',
            image: 'img/identicon.png',
            value: 4
            }
          },
          {
            type: 'table-leaderboards',
            id: 6,
            attributes:{
            position: 6,
            username: 'Sören Schiller',
            image: 'img/identicon.png',
            value: 1
            }
          },
          {
            type: 'table-leaderboards',
            id: 7,
            attributes:{
            position: 7,
            username: 'Vincent',
            image: 'img/identicon.png',
            value: 0
            }
          }
        ]
      }
    });



  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
