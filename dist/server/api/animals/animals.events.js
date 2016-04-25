/**
 * Animals model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = require('events');

var _animals = require('./animals.model');

var _animals2 = _interopRequireDefault(_animals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnimalsEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
AnimalsEvents.setMaxListeners(0);

// Model events
var events = {
    'save': 'save',
    'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
    var event = events[e];
    _animals2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
    return function (doc) {
        AnimalsEvents.emit(event + ':' + doc._id, doc);
        AnimalsEvents.emit(event, doc);
    };
}

exports.default = AnimalsEvents;
//# sourceMappingURL=animals.events.js.map
