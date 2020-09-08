const express = require("express");

const db = require('../../db/models');
const { City } = db;

const router = express.Router();

// GET / route
// this route returns all the cities in the database
//

// GET /:id(\\d+)
// returns a given city's details and associated events

module.exports = router;
