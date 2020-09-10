const express = require("express");

const db = require('../../db/models');
const { City, Event, User } = db;
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


router.get('/:id(\\d+)/events', asyncHandler( async (req, res) => {
    
    const city = await City.findByPk(req.params.id, {
        include: {
            model: Event,
            include:  [
                {
                    model: User,
                    as: 'host',
                    attributes: ['nickname']
                },
                {
                    model: User,
                    attributes: ['nickname']
                }
            ],
        },
        attributes: ['name', 'state']            
    })
    
    res.json({ city })
}))

module.exports = router;
