const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;

const db = require('../../db/models');

const { User } = db;

const getUserToken = (user) => {
    // Don't store the user's hashed password
    // in the token data.
    const userDataForToken = {
        id: user.id,
        emailAddress: user.emailAddress,
    };

    // Create the token.
    const token = jwt.sign(
        { data: userDataForToken },
        secret,
        { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
    );

    return token;
};


const getUserFromToken = async (token) => {
    try {
      const payload = jwt.verify(
        token,
        secret
      );
      return await User.findByPk(payload.data.id);
    } catch(err) {
      return null;
    }
  }

module.exports = { getUserToken, getUserFromToken};
