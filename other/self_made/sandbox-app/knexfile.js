module.exports = {

  pg: {
    client: 'pg',
    connection: {
      database: 'sandbox-app'
    }
  },

  postgresql: {
    client: 'postgresql',
    connection: {
      database: 'sandbox-app',
      user:     'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
