//? Environment variables may not be needed? Heroku might do that for us. Will need clarification.
//! will route db files such as projects do for familiarity, but no env vars for now.
//? will need username, password, and database to be similar on all local machines?


module.exports = {
  "development": {
    "username": "TBD",
    "password": TBD,
    "database": "TBD",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
