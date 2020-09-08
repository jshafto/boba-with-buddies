const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const csrfProtection = require("csurf")({ cookie: true });
const { check }= require('express-validator');


const { asyncHandler, handleValidationErrors } = require('../utils');
const { getUserToken } = require('../utils/auth');
// import expiresIn so you can add that to the cookie you set
const { expiresIn } = require('../../config').jwtConfig;


// import
const db = require('../../db/models');
const { User, Event } = db;

// define validations
    // check that nickname exists
const validateNickname =
    check("nickname")
        .exists({ checkFalsy: true })
    // check that email exists
    // check that password exists
    // could add more stringent requirements on username/password
const validateEmailAndPassword = [
    check("emailAddress")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password."),
];


// route for signing up - / POST
router.post(
    "/",
    csrfProtection,
    validateNickname,
    validateEmailAndPassword,
    handleValidationErrors,
    asyncHandler(async (req, res) => {
        const {
            nickname,
            emailAddress,
            password
        } = req.body;


        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ nickname, emailAddress, hashedPassword });
        const token = getUserToken(user);
        res.cookie("token", token, { maxAge: expiresIn * 1000 }); // maxAge in milliseconds
        res.status(201).json({
            user: { id: user.id },
            token,
        });
    })
);

// route for signing in - /token POST
router.post(
    "/token",
    csrfProtection,
    validateEmailAndPassword,
    handleValidationErrors,
    asyncHandler(async (req, res, next) => {
        const { emailAddress, password } = req.body;
        const user = await User.findOne({
            where: {
                emailAddress,
            },
        });


        // password validation and error handling
        if (!user || !user.validatePassword(password)) {
            const err = new Error("Login failed");
            err.status = 401;
            err.title = "Login failed";
            err.errors = ["Whoops! That email or password doesn't match our records."];
            return next(err);
        }

        // token generation
        // confusingly, soon mi's version awaits getUserToken... but that function is synchronous
        // idk
        const token = getUserToken(user);
        res.cookie("token", token, { maxAge: expiresIn * 1000 }); // maxAge in milliseconds
        res.json({ token, user: { id: user.id } });
    })
);


// include delete route that ends the session?


// include GET /token route? this seems important

// will also need routes for /:id(\\d+)/events and /:id(\\d+)/hosted?
// so that users can view the events that they're attending and hosting from their dashboard
router.get('/:id(\\d+)/hosted', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id,
        {
        include: [{
            model: Event,
            as: 'hostedEvents'
            // attributes: [] // possibly just for specific attributes?
        }]
    }
    );
    const {hostedEvents} = user;
    res.json(hostedEvents)
}))

router.get('/:id(\\d+)/events', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id,
        {
        include: [{
            model: Event,
            // attributes: [] // possibly just for specific attributes?
        }]
    }
    );
    const {Events} = user;
    res.json(Events);
}))



module.exports = router;
