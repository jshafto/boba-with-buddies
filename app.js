const express = require('express');
const app = express();

// require an api router and pages router?
const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api')

app.set('view engine', 'pug');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');


const { getUserFromToken } = require("./routes/utils/auth");

// middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// check if a token is stored, and if so,
// add a user object as part of the request
app.use(async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next();

    const user = await getUserFromToken(token, res);
    if (user) req.user = user;
    else res.clearCookie('token');
    next();
});

// include top-level routers and static assets
app.use("/public", express.static('public'));
app.use('/api', apiRouter)
app.use('/', pagesRouter)

// app.use((req, res, next) => {
//     res.render('error-page');
// });

module.exports = app;
