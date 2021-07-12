const mongo = require('mongoose');

const dataSchema = mongo.Schema({
    image: String,
    title: String,
    description: String,
    category: String
}, { timestamp: true });

const Music = mongo.model('Music', dataSchema, 'music');
module.exports = Music;