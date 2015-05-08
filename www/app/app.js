define([], function () {
    'use strict';

    var navigateTo = function (href) {
        this.trigger('navigate', href);
    }

    return {
        navigateTo: navigateTo
    };
});
