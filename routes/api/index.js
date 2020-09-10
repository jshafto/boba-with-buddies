
const express = require("express");
const router = express.Router();
const { environment } = require('../../config');
const { ValidationError } = require("sequelize");

const usersRouter = require('./users');
const eventsRouter = require('./events');
const citiesRouter = require("./cities")


router.use('/users', usersRouter)
router.use('/events', eventsRouter)
router.use('/cities', citiesRouter)



// handle validation errors
router.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map(e => e.message);
    }
    next(err);
});


// handle server errors
router.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    if (!isProduction) console.log(err);
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

// handle nonexistant endpoints
router.use('*', (req, res) => {
    res.status(404).json({ message: 'route does not exist' });
})

module.exports = router;
