const express = require("express");
const router = express.Router();

const { asyncHandler } = require('../utils');
// const csrfProtection = require("csurf")({ cookie: true });


const db = require('../../db/models');
const { Rsvp } = db;


//post /boba-times/:id
router.post("/", asyncHandler(async (req, res) => {
    const { userId, eventId } = req.body;
    const newRsvp = await Rsvp.create({ userId, eventId });
    res.json({ message: 'rsvp created!' });
}))
//delete /boba-times/:id
    router.delete("/:id", asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id, 10)
        console.log(id)
        const rsvp = await Rsvp.findAll()
        console.log(rsvp)
        
        // if(!rsvp){
        //     const err = new Error("Rsvp not found.");
        //     err.status = 404;
        //     next(err);
        //     return;
        // }
        
        // await rsvp.destroy();
        res.json({message: 'rsvp deleted'})
    }));

module.exports = router