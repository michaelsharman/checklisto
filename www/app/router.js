define([
    'backbone',
    'views/layouts/main',
    'views/home/main',
    'views/checklists/list'
], function (Backbone, MainLayoutView, HomeView, ChecklistsListView) {
    'use strict';

    return Backbone.Router.extend({

        routes: {
            'lists': 'showLists',
            '*actions': 'default'
        },

        initialize: function () {
            Backbone.history.start({
                pushState: true
            });
        },

        default: function () {
            var homeView = new HomeView();
            homeView.render();
        },

        showLists: function () {
            var listView = new ChecklistsListView();
            listView.render();
        },

        navigateAndTrigger: function (url) {
            this.navigate(url, {
                trigger: true
            });
        }
    });
});
