const {Bookmark} = require("../models")

module.exports = {

  async index (req, res) {
    try {
      const {songId, userId} = req.query

      const bookmark = await Bookmark.findAll({
        where: {
          SongId: songId,
          UserId: userId 
        }
      })
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during bookmarking the song'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body

      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during bookmarking the song'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findByPk(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured while deleting the bookmark'
      })
    }
  },
}
