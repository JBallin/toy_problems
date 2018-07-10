exports.seed = function(knex, Promise) {
  return knex('birds').del()
    .then(function () {
      return knex('birds').insert([
        {
          type: 'Bluejay',
          description: 'Blue and stuff',
          created_at: '2018-07-09T22:36:23.975Z',
          updated_at: '2018-07-09T22:36:23.975Z'
        },
        {
          type: 'Sparrow',
          description: 'Likes to eat worms',
          created_at: '2018-07-09T22:36:23.975Z',
          updated_at: '2018-07-09T22:36:23.975Z'
        },
        {
          type: 'Seagull',
          description: 'Likes to eat fish',
          created_at: '2018-07-09T22:36:23.975Z',
          updated_at: '2018-07-09T22:36:23.975Z'
       }
      ]);
    });
};
