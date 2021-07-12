const Music = require('../models/music-model');

module.exports = {
  async selectPodcast(req, res){
    const response = await Music.find({ category: 'podcast' });
    return res.json(response);
  },
  async selectMusic(req, res){
    const response = await Music.find({ category: 'music' });
    return res.json(response);
  }
}