define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/checklists/list.html'
], function($, _, Backbone, checklistsListTemplate){
    var ChecklistsListView = Backbone.View.extend({
        el: $('#container'),
        render: function () {
            var data = {},
                template = _.template(checklistsListTemplate, data);
            this.$el.append(template);
        }
    });
    return ChecklistsListView;
});
