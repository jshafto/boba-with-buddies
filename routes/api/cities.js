const express = require("express");

const db = require('../../db/models');
const { City, Event } = db;
const { asyncHandler, handleValidationErrors } = require('../utils');
const router = express.Router();

router.get("/", asyncHandler( async (req, res) => {
    const cities = await City.findAll()
    res.json({ cities })
}))

// GET /:id(\\d+)
// returns a given city's details and associated events

router.get("/:id(\\d+)", asyncHandler( async (req, res) => {
    
    const city = await City.findByPk(req.params.id, {
        include: Event
    })

    res.json({ city })
}))

module.exports = router;
