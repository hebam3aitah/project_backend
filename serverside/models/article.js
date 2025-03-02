// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Article extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Article.init({
//     date: DataTypes.DATE,
//     title: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     detailed_description: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Article',
//   });
//   return Article;
// };
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    date: { type: DataTypes.DATE, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    detailed_description: { type: DataTypes.TEXT, allowNull: false }
  }, {});

  return Article;
};
