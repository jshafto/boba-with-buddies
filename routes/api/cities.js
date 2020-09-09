const express = require("express");

const db = require('../../db/models');
const { City, Event } = db;
const { asyncHandler, handleValidationErrors } = require('../utils');
const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const cities = await City.findAll()
    res.json({ cities })
}))


router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    
    const city = await City.findByPk(req.params.id)
    
    res.json({ city })
}))

router.get('/:id(\\d+)/events', asyncHandler( async(req,res) => {
    
    const cityEvents = await Event.findAll({
        where: {
            cityId: req.params.id
        }
    })
    
    res.json(cityEvents)
}))

module.exports = router;
