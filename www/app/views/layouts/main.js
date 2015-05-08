define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/nav/top.html',
    'text!templates/layouts/main.html'
], function ($, _, Backbone, navTemplate, layoutTemplate) {
    var AppView = Backbone.View.extend({
        el: $('#container'),
        render: function () {
            var template = _.template(navTemplate + layoutTemplate);
            this.$el.append(template);
        }
    });
    return AppView;
});
