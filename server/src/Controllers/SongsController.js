const {Songs} = require("../models")

module.exports = {

  async index (req, res) {
    try {
      const songs = Songs.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetching the song'
      })
    }
  },

  async post (req, res) {
    try {
      const songs = Songs.create(req.body)
      res.send(songs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured while creating a song'
      })
    }
  }
}
