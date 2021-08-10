const {
  sequelize,
  Song,
  User,
  Bookmark} = require("../src/models");

  const Promise = require('bluebird')
  const songs = require('./Songs.json')
  const users = require('./User.json')
  const bookmarks = require('./Bookmark.json')

sequelize.sync({ force:true })
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)  
      })
    )
    

    await Promise.all(
        songs.map(song => {
          Song.create(song)  
        })
      )

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)  
      })
    )
  })