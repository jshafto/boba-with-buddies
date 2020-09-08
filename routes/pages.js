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
    res.render('home', { title: 'Boba with Buddies' })
})

// '/signin' route
router.get('/signin', csrfProtection, (req, res) => {
    if (req.user) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signin', { csrf: req.csrfToken() })
})


// '/signup' route
router.get('/signup', csrfProtection, (req, res) => {
    if (req.user) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup', { csrf: req.csrfToken() })
})


// '/boba-times' route

// '/events/:id'


// '/dashboard' route
// redirects to the signin page if user isn't signed in
router.get('/dashboard', csrfProtection, (req, res) => {
    if (!req.user) {
      res.redirect("/signin");
      return;
    }
    res.render('dashboard', { nickname: req.user.nickname, csrf: req.csrfToken() });
  });


// '*' route
// this will render an error page if the user requests a page
// that we don't have
router.get('*', (req, res) => {
    res.render('error-page');
});





module.exports = router;
