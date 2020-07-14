const {Song} = require("../models")

module.exports = {

  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetching the songs'
      })
    }
  },

  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId)
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetching the song'
      })
    }
  },

  async post (req, res) {
    try {
      const songs = await Song.create(req.body)
      res.send(songs)
    } catch (err) {
      console.log(err, "i am in here")
      res.status(500).send({
        error: 'An error has occured while creating a song'
      })
    }
  }
}
