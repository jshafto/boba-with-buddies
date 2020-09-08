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
    res.json({ cities })
}))

// GET /:id(\\d+)
// returns a given city's details and associated events

router.get("/:id(\\d+)", asyncHandler( async (req, res) => {
    
    const city = await City.findByPk(req.params.id)
    
    // if(!city){
    //     const error = new Error("Couldn't find that city!")
    //     error.status = 404
    //     res.json({ error })
    // }
    res.json({ city })
}))

module.exports = router;
