'use strict';

const
  path = '/api/v1/google';

function googleRouter(app) {

  app.route(path + '/set-datas')
    .post(require('./set-datas'))
}


module.exports = googleRouter;