/////  insert tabel
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: false },
      goal_amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      collected_amount: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0 },
      status: { type: Sequelize.STRING, defaultValue: 'pending' },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};

