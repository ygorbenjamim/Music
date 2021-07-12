const express = require('express');
const routes = express.Router();
const Music = require('./controller/music-controller');

routes.get('/podcast', Music.selectPodcast);
routes.get('/music', Music.selectMusic);

module.exports = routes;