'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ticket.init({
    ticketDetails: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Ticket detail cannot empty"
        }
      }
    },
    customerName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Customer name cannot empty"
        }
      }
    },
    date: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Date cannot empty"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Status cannot empty"
        },
        isIn: {
          args: [["LOW", "NORMAL", "HIGH"]],
          msg: "Please input with Capital Case"
        }
      }
    }
    }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};