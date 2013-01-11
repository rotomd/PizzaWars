/*
*   side menu view
*/

define(
    ['backbone', 'jquery', 'underscore'],     
    function(Backbone, $, _) {
        var SidemenuView = Backbone.View.extend({
           
            //the element for this view
            el: '#side-menu',
           
            template: participantsTemplate,
           
            initialize: function(){
                this.$el.dataTable({});
            }           
        });
        
        return ParticipantsView;
    }
);