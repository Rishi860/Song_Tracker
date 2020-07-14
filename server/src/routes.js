const AuthenticationController = require("./Controllers/AuthenticationController")
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require("./Controllers/SongsController")

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
}
