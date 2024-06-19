const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log(`Example app listening on port ${3000}`));

module.exports = app;
