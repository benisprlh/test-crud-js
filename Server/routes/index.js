const ControllerKaryawan = require("../Controllers/controllerKaryawan");
const errorHandler = require("../middlewares/errorhandler");

const router = require("express").Router();

router.post("/createKaryawan", ControllerKaryawan.addKaryawan);
router.get("/getKaryawan", ControllerKaryawan.getKaryawan);
router.get("/getKaryawanById/:id", ControllerKaryawan.getKaryawanById);
router.delete("/deleteKaryawan/:id", ControllerKaryawan.deleteKaryawan);
router.put("/updateKaryawan/:id", ControllerKaryawan.updateKaryawan);
router.use(errorHandler);
module.exports = router;
