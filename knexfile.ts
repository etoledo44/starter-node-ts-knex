// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST,
      user : 'root',
      password : '',
      database : 'typescript'
    },
    seeds:{
      directory: 'src/database/seeds'
    },
    migrations: {
      directory: 'src/database/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB
    },
    seeds:{
      directory: 'src/database/seeds'
    },
    migrations: {
      directory: 'src/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB
    },
    seeds:{
      directory: 'src/database/seeds'
    },
    migrations: {
      directory: 'src/database/migrations'
    }
  }

};
