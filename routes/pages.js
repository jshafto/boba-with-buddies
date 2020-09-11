const express = require('express');
const router = express.Router();
const { key } = require("../config/index").googleMaps
const csrfProtection = require("csurf")({ cookie: true });

// this router only handles GET requests that return actual pages
// on the site
// GET, POST, and DELETEs for the API will be handled with separate routes.


router.get('/', (req, res) => {
    // this route should show the main homepage
    // it should be the same whether or not the user
    // is signed in
    res.render('welcome', { title: 'Boba with Buddies' })
})

// '/signin' route
router.get('/login', csrfProtection, (req, res) => {
    if (req.user) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', { title: 'Boba with Buddies', csrf: req.csrfToken() })
})


// '/signup' route

router.get('/signup', csrfProtection, (req, res) => {
    if (req.user) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup', { title: 'Boba with Buddies', csrf: req.csrfToken() })
})


// '/boba-times' route
router.get('/boba-times', (req, res) => {
    res.render('boba-times', { key })
})

// '/boba-times/:id'
router.get('/boba-times/:id(\\d+)', csrfProtection, (req, res) => {
    res.render('events', { title: 'Boba with Buddies' });
})


// '/dashboard' route
// redirects to the signin page if user isn't signed in
router.get('/dashboard', csrfProtection, (req, res) => {
    if (!req.user) {
        res.redirect("/signin");
        return;
    }
    res.render('dashboard', { nickname: req.user.nickname, csrf: req.csrfToken() });
});


router.get('/hosting', csrfProtection, (req, res) => {
    if (!req.user) {
        res.redirect("/signin");
        return;
    }
    res.render('hosting', { csrf: req.csrfToken() });
});


// '*' route
// this will render an error page if the user requests a page
// that we don't have
router.get('*', (req, res) => {
    res.render('error-page');
});






module.exports = router;
