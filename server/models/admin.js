'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     fullName() {
       return `${this.firstName} ${this.lastName}`
     }

    static associate(models) {
      // define association here
      Admin.hasOne(models.Overview)
    }
  };
  Admin.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "First name cannot empty"
        }
      }
    },
    lastName: DataTypes.STRING,
    displayPicture: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot empty"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Role cannot empty"
        },
        isIn: {
          args: [["admin"]],
          msg: "Please input 'admin' in role"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password cannot empty"
        },
        len: {
          args: [7, 128],
          msg: "Password must contain at least 7 characters and maximum 128 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });

  Admin.addHook("beforeCreate", (instance, option) => {
    if(instance.lastName === "") {
      instance.lastName = instance.firstName
    }
  })

  Admin.addHook("beforeCreate", (instance, option) => {
    const salt = bcrypt.genSaltSync(Number(process.env.HASH))
    let hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  })

  return Admin;
};