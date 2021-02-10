'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Overview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Overview.belongsTo(models.Admin)
    }
  };
  Overview.init({
    unresolved: DataTypes.INTEGER,
    overdue: DataTypes.INTEGER,
    open: DataTypes.INTEGER,
    onhold: DataTypes.INTEGER,
    resolved: DataTypes.INTEGER,
    received: DataTypes.INTEGER,
    average_first_response: DataTypes.STRING,
    average_response_time: DataTypes.STRING,
    resolution: DataTypes.INTEGER,
    AdminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Overview',
  });
  return Overview;
};