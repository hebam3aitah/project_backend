module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'مشروع دعم الأسر المنتجة',
        description: 'مشروع يهدف إلى دعم الحرف اليدوية',
        goal_amount: 5000,
        collected_amount: 0,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
