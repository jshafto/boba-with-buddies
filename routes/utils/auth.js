const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;

const db = require('../../db/models');

const { User } = db;

const getUserToken = (user) => {
    // Don't store the user's hashed password
    // in the token data.
    const userDataForToken = {
        id: user.id,
        email: user.email,
    };

    // Create the token.
    const token = jwt.sign(
        { data: userDataForToken },
        secret,
        { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
    );

    return token;
};

// in the twitter lite project we did, we defined a "restoreUser" middleware function
// which decodes the JWT to find the user and stores the user in the request object.
// this piece of middleware was used in the 'tweets' route, along with an additional
// bearerToken function (this collection of middlewares was called "requireAuth")
//
// in contrast, soon mi's example twitter lite defines a "getUserFromToken" function
// which only gets the user token, and in her overall app.js file, she uses a piece
// of middleware that invokes the function
//
// these seem like they address the same goal— so i used soon mi's convention


const getUserFromToken = async (token) => {
    try {
      const payload = jwt.verify(
        token,
        secret
      );
      return await User.findByPk(payload.id);
    } catch(err) {
      return null;
    }
  }

module.exports = { getUserToken, getUserFromToken};
