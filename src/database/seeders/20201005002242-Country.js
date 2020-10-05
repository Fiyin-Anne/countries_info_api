module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Countries',
    [
      {
        name: 'Nigeria',
        capital: 'Abuja',
        population: 195,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ghana',
        capital: 'Accra',
        population: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Canada',
        capital: 'Ottawa',
        population: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Countries', null, {}),
};