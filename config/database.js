<<<<<<< HEAD
const config = require("./index");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize"
  },
};
=======
//? Environment variables may not be needed? Heroku might do that for us. Will need clarification.
//! will route db files, such as projects do, for familiarity, but no env vars for now.
//? will need username, password, and database to be similar on all local machines? 
//! username: TBD
//! password: TBD or stay null? for simplicity
//! database: TBD

module.exports = {
  "development": {
    "username": "test",
    "password": null,
    "database": "test_db",
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
>>>>>>> master
