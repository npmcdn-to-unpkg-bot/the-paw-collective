'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimalsSchema = new _mongoose2.default.Schema({
    name: String,
    instagram: String,
    category: String,
    image: String,
    active: Boolean
});

exports.default = _mongoose2.default.model('Animals', AnimalsSchema);
//# sourceMappingURL=animals.model.js.map
