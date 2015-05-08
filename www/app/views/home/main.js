define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/home/main.html'
], function($, _, Backbone, app, homeTemplate){

    var HomeView = Backbone.View.extend({

        el: $('#container'),

        events: {
            'click .nav-lists': 'navigateTo'
        },

        render: function () {
            var template = _.template(homeTemplate);
            this.$el.append(template);
        },

        navigateTo: function (e) {
            e.preventDefault();
            // this.app.navigate($(e.target).attr('href'));
            app.trigger('navigate', $(e.target).attr('href'));
        }

    });

    return HomeView;

});
