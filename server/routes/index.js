'use strict';

const    
    googleRouter = require('./google')


function routerAdapter(app) {    
    googleRouter(app);
}

module.exports = routerAdapter;
