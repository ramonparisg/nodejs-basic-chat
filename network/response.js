class ApiResponse {
  constructor(success, message) {
    this.success = success;
    this.message = message;
  }
}

exports.success = function(req, res, message, status) {
  res.status(status || 200).send(new ApiResponse(true, message));
};

exports.error = function(req, res, message, status) {
  res.status(status || 500).send(new ApiResponse(false, message));
};
