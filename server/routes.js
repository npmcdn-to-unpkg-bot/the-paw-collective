/**
 * Main application routes
 */

'use strict';

import errors from './components/errors'
import path from 'path'

export default function(app) {
    // Insert routes below
    app.use('/api/interview', require('./api/interview'))
    app.use('/api/image-uploads', require('./api/image-upload'))
    app.use('/api/animal', require('./api/animals'))
    app.use('/api/users', require('./api/user'))

    app.use('/auth', require('./auth').default)

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404])

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'))
        })
}
