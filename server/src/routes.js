const AuthenticationController = require("./Controllers/AuthenticationController")
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require("./Controllers/SongsController")
const BookmarksController = require("./Controllers/BookmarksController")


module.exports = (app) => {
  app.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)
  app.post('/login',
  AuthenticationController.login)

  app.get('/songs',
  SongsController.index)
  app.post('/songs',
  SongsController.post)
  app.get('/songs/:songId',
  SongsController.show)
  app.put('/songs/:songId',
  SongsController.put)
  app.post('/songs/:songId/edit',
  SongsController.edit)
  
  app.get('/bookmarks',
  BookmarksController.index)
  app.post('/bookmarks',
  BookmarksController.post)
  app.get('/bookmarks/:bookmarkId',
  BookmarksController.delete)
}
