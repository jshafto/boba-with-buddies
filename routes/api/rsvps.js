const express = require("express");
const router = express.Router();

const { asyncHandler } = require('../utils');
// const csrfProtection = require("csurf")({ cookie: true });


const db = require('../../db/models');
const { User, Rsvp, Event } = db;


//post /boba-times/:id
router.post("/", asyncHandler(async (req, res) => {
    const { userId, eventId } = req.body;
    const check = await Rsvp.findOne({where: {userId, eventId}})
    // console.log(check)
    if(!check){
        const newRsvp = await Rsvp.create({ userId, eventId });
        
        res.json({ message: 'rsvp created!' });
        return
    }
    res.json({ message: 'rsvp already exists!' });
}))
//delete /boba-times/:id
router.delete("/", asyncHandler(async (req, res) => {
    const { userId, eventId } = req.body;
    const rsvp = await Rsvp.findOne({
        where: {
            userId: userId,
            eventId: eventId
        }
    })

    await rsvp.destroy();
    res.json({message: 'rsvp deleted'}) 
}));

module.exports = router