const db = require('../db/data');

exports.getPublications = (req, res) => {
    try {
        res.status(200).json({ status: true, publications: db.publications })
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};