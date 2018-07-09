module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress://localhost/birds-app_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgress://localhost/birds-app_test'
  }
};
