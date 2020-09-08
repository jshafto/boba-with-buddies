const express = require("express");
const router = express.Router();

const { asyncHandler, handleValidationErrors } = require('../utils');
const csrfProtection = require("csurf")({ cookie: true });

const db = require('../../db/models');
const { Event, User } = db;

router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll({
      include: [{
        model: User,
        attributes: ['nickname']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({ events });
    // res.send("Events!")
}));

router.get('/:id', asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["nickname"],
        },
      ],
    });
    if (!event) {
      const err = new Error('Event not found.');
      err.status = 404;
      next(err);
      return;
    }
    res.json({ event });
}));

router.post('/', asyncHandler(async (req, res)=> {
    const { date, address, cityId, hostId } = req.body;

    const newEvent = await Event.create({
        date,
        address,
        cityId,
        hostId
    });
    res.json({ newEvent });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["nickname"],
        },
      ],
    });
    if (!event) {
      const err = new Error("Event not found.");
      err.status = 404;
      next(err);
      return;
    }

    await event.destroy();
    res.json({ message: 'success' });
}));


// GET /:id(\\d+)
// returns an event with a given id

// POST /
// allows a user to create a new event (with themself as the host)

module.exports = router;
