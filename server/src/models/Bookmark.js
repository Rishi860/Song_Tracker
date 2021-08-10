
module.exports = (sequelize, DataTypes) =>{
    const Bookmark = sequelize.define('Bookmark', {
      SongId: DataTypes.STRING,
      UserId: DataTypes.STRING
    })

    Bookmark.associate = function(models) {
        // Building an association between User and Song as a Bookmark
        Bookmark.belongsTo(models.User),
        Bookmark.belongsTo(models.Song)
    }

    return Bookmark
  }
  