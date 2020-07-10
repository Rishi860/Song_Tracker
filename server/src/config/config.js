module.exports = {
    port: process.env.PORT || 8081,
    db: {
      database: process.env.DB_NAME || 'tabtracker',
      user: process.env.DB_USER || 'tabtracker',
      password: process.env.DB_PASS || 'tabtracker',
      options: {
          dialect: process.env.DIAlECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: './Song_Tracker.sqlite'
      } 
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
  }
