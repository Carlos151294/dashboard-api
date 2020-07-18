const jwt = require('jsonwebtoken');
const environment = require('../config/environment');

class Token {
    buildJwt(data) {
        return jwt.sign({ ...data }, environment.jwt.secret, { expiresIn: environment.jwt.lifetime });
    }

    verifyJwt(token) {
        return jwt.verify(token, environment.jwt.secret)
    }
}

module.exports = new Token();