const HttpStatus = require("http-status-codes");

class ApiResponse {
  constructor(success, body) {
    this.success = success;
    this.body = body;
  }
}

exports.success = function(req, res, message, status) {
  res.status(status || HttpStatus.OK).send(new ApiResponse(true, message));
};

exports.error = function(req, res, message, status) {
  res
    .status(status || HttpStatus.INTERNAL_SERVER_ERROR)
    .send(new ApiResponse(false, message));
};
