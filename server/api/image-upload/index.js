'use strict';

var express = require('express')
var controller = require('./image-uploads.controller')
var multiparty = require('connect-multiparty')


var router = express.Router()
var multipartyMiddleware = multiparty()

router.post('/', multipartyMiddleware, controller.upload);

module.exports = router
