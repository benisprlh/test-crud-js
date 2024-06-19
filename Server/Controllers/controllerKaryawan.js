const { Karyawan } = require("../models");

class ControllerKaryawan {
  static async addKaryawan(req, res, next) {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    try {
      const newKaryawan = await Karyawan.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
      });
      res.status(201).json(newKaryawan);
    } catch (error) {
      next(error);
    }
  }

  static async getKaryawan(req, res, next) {
    try {
      const dataKaryawan = await Karyawan.findAll();
      res.status(200).json(dataKaryawan);
    } catch (error) {
      next(error);
    }
  }

  static async getKaryawanById(req, res, next) {
    try {
      const dataKaryawan = await Karyawan.findByPk(req.params.id);
      if (!dataKaryawan) throw { name: "not found" };
      res.status(200).json(dataKaryawan);
    } catch (error) {
      next(error);
    }
  }

  static async updateKaryawan(req, res, next) {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    try {
      const dataKaryawan = await Karyawan.findByPk(req.params.id);
      if (!dataKaryawan) throw { name: "not found" };
      await dataKaryawan.update({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
      });
      res.status(200).json(dataKaryawan);
    } catch (error) {
      next(error);
    }
  }

  static async deleteKaryawan(req, res, next) {
    try {
      const karyawan = await Karyawan.findByPk(req.params.id);
      if (!karyawan) throw { name: "not found" };
      await karyawan.destroy();
      res
        .status(200)
        .json({ message: `${karyawan.firstName} success to delete` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerKaryawan;
