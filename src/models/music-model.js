const mongo = require('mongoose');

const dataSchema = mongo.Schema({
    image: String,
    title: String,
    description: String,
    category: String
}, { timestamp: true });

const Sound = mongo.model('Sound', dataSchema, 'sounds');
module.exports = Sound;