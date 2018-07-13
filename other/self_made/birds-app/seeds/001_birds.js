exports.seed = function(knex, Promise) {
  return knex('birds').del()
    .then(function () {
      return knex('birds').insert([
        {
          type: 'Bluejay',
          description: 'Blue and stuff'
        },
        {
          type: 'Sparrow',
          description: 'Likes to eat worms'
        },
        {
          type: 'Seagull',
          description: 'Likes to eat fish'
       },
       {
         type: 'Crow',
         description: 'Bad luck!'
       },
       {
         type: 'Pigeon',
         description: 'A delicacy in asia'
       },
       {
         type: 'Parrot',
         description: 'Smartest bird?'
       },
       {
         type: 'Hummingbird',
         description: 'Flaps its wings fast!'
       }
      ]);
    });
};
