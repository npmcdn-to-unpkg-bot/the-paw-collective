/*
 *POST /api/upload-image
 */

'use strict';

import cloudinary from 'cloudinary'

cloudinary.config({
	cloud_name 	: process.env.CLOUD_NAME,
	api_key 	: process.env.CLOUD_API_KEY,
	api_secret  : process.env.CLOUD_API_SECRET
})

function uploadFileToCloud(req, res, next) {
    var file = req.files.file

    if (req.files.file) {
        console.log('it exists')
        cloudinary.uploader.upload(req.files.file.path, function(result) {
            console.log('the result is', result)
            if (result.url) {
                console.log('result url exists')
                    // req.imageLink = result.url
                res.json(result)
                next()
            } else {
                console.log('something went wrong')
                res.json(error)
            }
        })
    } else {
        console.log('I do not know what happened')
        next()
    }
}

export function upload(req, res, next) {
	uploadFileToCloud(req, res, next)
	console.log('the cloud name is', process.env.CLOUD_NAME)
}

