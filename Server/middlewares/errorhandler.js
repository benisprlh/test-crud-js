function errorHandler(error, req, res, next) {
  let statusCode, message;
  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      message = error.errors[0].message;
      break;

    case "not found":
      statusCode = 404;
      message = "Data not found";
      break;

    default:
      statusCode = 500;
      message = "Internal Server Error";
      break;
  }
  // console.log(error);
  res.status(statusCode).json({ message });
}

module.exports = errorHandler;
