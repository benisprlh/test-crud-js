"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Karyawan.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Firstname is required",
          },
          notEmpty: {
            msg: "Firstname is required",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Lastname is required",
          },
          notEmpty: {
            msg: "Lastname is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "email is required",
          },
          notEmpty: {
            msg: "email is required",
          },
          isEmail: {
            msg: "email must have @",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Phone Number is required",
          },
          notEmpty: {
            msg: "Phone Number is required",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Address is required",
          },
          notEmpty: {
            msg: "Address is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Karyawan",
    }
  );
  return Karyawan;
};
