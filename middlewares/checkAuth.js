const Token = require('../tools/Token');
const msg = require('../config/messages');

module.exports = (req, res, next) => {
    try {
        // 'Bearer tokenValue'
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = Token.verifyJwt(token);
        req.userData = { ...decodedToken };
        next();
    } catch (e) {
        res.status(401).json({ message: msg.error.nonAuthenticated });
    }
};