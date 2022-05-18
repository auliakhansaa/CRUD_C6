'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tokoku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tokoku.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    apporoved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tokoku',
  });
  return tokoku;
};