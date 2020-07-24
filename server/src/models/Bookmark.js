
module.exports = (sequelize, DataTypes) =>{
    const Bookmark = sequelize.define('Bookmark', {})

    Bookmark.associate = function(models) {
        // Building an association between User and Song as a Bookmark
        Bookmark.belongsTo(models.User),
        Bookmark.belongsTo(models.Song)
    }

    return Bookmark
  }
  