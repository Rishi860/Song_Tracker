const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$'))
    }
    const {error, vlaue} = Joi.validate(req.body, schema)

    if(error){
      switch(error.details[0].context.key){
          case 'email':
              res.status(400).send({
                error: 'You must provide with a valid email ID'
              })
            break
          case 'password':
              res.status(400).send({
                error: `The password must provide the following details:<br>
                    1: It must only contain following characters: Uppercase, Lowercase and numericals
                    <br>
                    2: It should be atleast 8 characters long and at most 32 characters.
                    `
              })
            break
          default:
            res.status(400).send({
              error: 'Invalid registration information'
        })
      }
    } else {
        next()
    }
  }
}
