/*
 *POST /api/upload-image
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.upload = upload;

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cloudinary2.default.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

function uploadFileToCloud(req, res, next) {

    // Check first if the image is from the web
    if (req.body.file) {
        // This means the image is from instagram
        console.log('web photo');
        uploadToCloudinary(req.body.file, res, next);
    } else {
        uploadToCloudinary(req.files.file.path, res, next);
    }
}

function uploadToCloudinary(filePath, res, next) {
    _cloudinary2.default.uploader.upload(filePath, function (result) {
        if (result.url) {
            console.log('This image already exists in the Cloud');
            // req.imageLink = result.url
            res.json(result);
            next();
        } else {
            console.log('Something went wrong');
            res.json(error);
        }
    });
}

function upload(req, res, next) {
    uploadFileToCloud(req, res, next);
    console.log('the cloud name is', process.env.CLOUD_NAME);
}
//# sourceMappingURL=image-uploads.controller.js.map
