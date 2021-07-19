const Sound = require('../models/music-model');

module.exports = {
  async selectPodcast(req, res){
    const response = await Sound.find({ category: 'podcast' });
    console.log('It was requested to search for all podcasts');
    return res.json(response);
  },
  async selectMusic(req, res){
    const response = await Sound.find({ category: 'music' });
    console.log('It was requested to search for all songs');
    return res.json(response);
  }
}