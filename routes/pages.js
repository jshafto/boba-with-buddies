const express = require('express');
const router = express.Router();

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
router.get('/signin', (req, res) => {
    res.render('login', { title: 'Boba with Buddies' })

})


// '/signup' route
router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Boba with Buddies' })

})


// '/boba-times' route

// '/events/:id'


// '/dashboard' route
// this route should be protected
// redirects to the login page if user isn't signed in


// '*' route
// this will render an error page if the user requests a page
// that we don't have
router.get('*', (req, res) => {
    res.render('error-page');
});





module.exports = router;
