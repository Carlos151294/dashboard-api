const Token = require('../tools/Token');
const db = require('../db/data');
const msg = require('../config/messages');
const environment = require('../config/environment');

exports.loginUser = (req, res) => {
    try {
        const { email } = req.body;
        const { users } = db;
        const user = users.find(user => user.email === email);

        if (!user) throw new Error(msg.error.invalidEmail);

        const token = Token.buildJwt(req.body);
        res.status(200).json({
            status: true,
            message: msg.success.authenticated,
            token,
            expiresIn: environment.jwt.lifetime,
            userId: user.id
        });
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};