require(['config'], function () {
    'use strict';

    require([
        'underscore',
        'backbone',
        'router',
        'app'
    ], function (_, Backbone, Router, app) {

        var router = new Router();

        _.extend(app, Backbone.Events);

        app.on('navigate', router.navigateAndTrigger, router);
    });
});
