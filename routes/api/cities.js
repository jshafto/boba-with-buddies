const express = require("express");

const db = require('../../db/models');
const { City } = db;
const { asyncHandler, handleValidationErrors } = require('../utils');
const router = express.Router();

// GET / route
// this route returns all the cities in the database
//
router.get("/", asyncHandler( async (req, res) => {
    const cities = await City.findAll()
    res.JSON({ cities })
}))

// GET /:id(\\d+)
// returns a given city's details and associated events

module.exports = router;
