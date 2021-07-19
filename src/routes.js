const express = require('express');
const routes = express.Router();
const Sound = require('./controller/sound-controller');

routes.get('/podcast', Sound.selectPodcast);
routes.get('/music', Sound.selectMusic);

module.exports = routes;