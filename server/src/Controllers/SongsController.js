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
  },

  async edit (req, res) {
    try {
      const songs = await Song.update(req.body)
      res.send(songs)
    } catch (err) {
      console.log(err, "i am in here")
      res.status(500).send({
        error: 'An error has occured while creating a song'
      })
    }
  },

  async put (req, res) {
    try {
      const songs = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      console.log(err, "i am in here")
      res.status(500).send({
        error: 'An error has occured while creating a song'
      })
    }
  }
}
