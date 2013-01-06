/*
*   participants view
*/

define(
    ['backbone', 'jquery', 'underscore', 'templates/participants', 'datatables'],     
    function(Backbone, $, _, indexTemplate, participantsTemplate, dataTables){
        var ParticipantsView = Backbone.View.extend({
           
            //the element for this view
            el: '#participants table',
           
            template: participantsTemplate,
           
            initialize: function(){
                this.$el.dataTable({});
            }           
        });
        
        return ParticipantsView;
    }
);