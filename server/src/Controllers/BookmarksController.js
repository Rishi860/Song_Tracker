const {Bookmark} = require("../models")

module.exports = {

  async index (req, res) {
    try {
      const {songId, userId} = req.body
      console.log(songId, userId,req.body)
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
        error: 'An error has occured during bookmarking initially the song'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      const bookmark = await Bookmark.findAll({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log(bookmark)
      if(bookmark[0]){
        return res.status(400).send({
          error: 'You have already bookmarked this song'
        })
      }

      const newBookmark = await Bookmark.create(req.body)
      res.send(newBookmark)
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
