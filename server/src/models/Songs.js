
module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    albumImageUrl: DataTypes.STRING,
    tab: DataTypes.TEXT,
    youtubeID: DataTypes.STRING,
  })
  return User
}
