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
        error: 'An error has occured during fetching the songs'
      })
    }
  }
}
