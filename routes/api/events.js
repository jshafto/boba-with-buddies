const express = require("express");
const router = express.Router();

const db = require('../../db/models');
const { Event } = db;

// GET /:id(\\d+)
// returns an event with a given id

module.exports = router;
