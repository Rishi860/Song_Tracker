module.exports = (sequelize, DataTypes) => 
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      Unique: true
    },
    password: DataTypes.STRING
  })
  