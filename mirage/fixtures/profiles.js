export default [
  {
    id: 1,
    username: "MaxMustermann",
    emailAddress: "max.mustermann@mail.de",
    password: "password",
    globalStats: {
      lastLogin: new Date(),
      timeSpend: 3145,
      tasksDone: 10,
      pointsEarned: 30,
      achievementPoints: 10,
      mostPlayedMode: "SQL"
    },
    profileRadar: {
      sql: 50,
      ra: 40,
      taskTimeRatio: 40
    }

  },
  {
    id: 2,
    username: "Arcturus",
    emailAddress: "arcturus.mengsk@terran.league",
    password: "league",
    globalStats: {
      lastLogin: "2016-07-25T10:20:00.378Z",
      timeSpend: 234234,
      tasksDone: 234,
      pointsEarned: 2344,
      achievementPoints: 12340,
      mostPlayedMode: "SQL"
    },
    profileRadar: {
      sql: 40,
      ra: 60,
      taskTimeRatio: 50
    }
  }
];
