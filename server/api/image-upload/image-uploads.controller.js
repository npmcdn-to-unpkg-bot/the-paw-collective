/*
 *POST /api/upload-image
 */

'use strict';

import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

function uploadFileToCloud(req, res, next) {

    // Check first if the image is from the web
    if (req.body.file) {
        // This means the image is from instagram
        uploadToCloudinary(req.body.file, res, next)
    } else {
        uploadToCloudinary(req.files.file, res, next)
    }
}

function uploadToCloudinary(filePath, res, next) {
    cloudinary.uploader.upload(filePath, (result) => {
        if (result.url) {
            console.log('This image already exists in the Cloud')
                // req.imageLink = result.url
            res.json(result)
            next()
        } else {
            console.log('Something went wrong')
            res.json(error)
        }
    })
}

export function upload(req, res, next) {
    uploadFileToCloud(req, res, next)
    console.log('the cloud name is', process.env.CLOUD_NAME)
}
