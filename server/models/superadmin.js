'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs")
module.exports = (sequelize, DataTypes) => {
  class SuperAdmin extends Model {
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
    }
  };
  SuperAdmin.init({
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
          msg: "Plaese input role is super admin"
        },
        isIn: {
          args: [["superadmin"]],
          msg: "Please input 'superadmin' in role"
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
    modelName: 'SuperAdmin',
  });

  SuperAdmin.addHook("beforeCreate", (instance, option) => {
    if(instance.lastName === "") {
      instance.lastName = instance.firstName
    }
  })

  SuperAdmin.addHook("beforeCreate", (instance, option) => {
    const salt = bcrypt.genSaltSync(Number(process.env.HASH))
    let hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  })

  return SuperAdmin;
};