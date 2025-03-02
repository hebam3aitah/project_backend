// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Articles', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       date: { type: Sequelize.DATE, allowNull: false },
//       title: { type: Sequelize.STRING, allowNull: false },
//       description: { type: Sequelize.TEXT, allowNull: false },
//       detailed_description: { type: Sequelize.TEXT, allowNull: false },
//       createdAt: { allowNull: false, type: Sequelize.DATE },
//       updatedAt: { allowNull: false, type: Sequelize.DATE }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Articles');
//   }
// };
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: { type: Sequelize.DATE, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: false },
      detailed_description: { type: Sequelize.TEXT, allowNull: false },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Articles');
  }
};