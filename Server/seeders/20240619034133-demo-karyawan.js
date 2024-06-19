"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dataUser = JSON.parse(
      fs.readFileSync("./data/karyawan.json", "utf-8")
    ).map((item) => {
      item.createdAt = item.updatedAt = new Date();
      return item;
    });
    console.log(dataUser);
    await queryInterface.bulkInsert("Karyawans", dataUser);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Karyawans", null, {});
  },
};
