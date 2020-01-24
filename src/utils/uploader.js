const multer = require("multer");
const path = require("path");

function upload(pathToUpload) {
  const storage = multer.diskStorage({
    destination: pathToUpload,
    filename: function(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    }
  });

  return multer({ dest: pathToUpload, storage: storage });
}

module.exports = upload;
