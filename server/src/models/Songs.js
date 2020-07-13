
module.exports = (sequelize, DataTypes) =>{
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    albumImageUrl: DataTypes.STRING,
    tab: DataTypes.TEXT,
    youtubeID: DataTypes.STRING,
  })
  return Song
}
