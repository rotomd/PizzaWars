/*
*   index view
*/

define(
    ['backbone', 'jquery', 'underscore', 'templates/index', 'views/participants', 'views/shops'],     
    function(Backbone, $, _, indexTemplate, ParticipantsView, ShopsView){
        var IndexView = Backbone.View.extend({
           
            //the element for this view
            el: '#wrapper',
           
            template: indexTemplate,
           
            initialize: function(){
                new ParticipantsView();
                new ShopsView();            
            }           
        });
        
        return IndexView;
    }
);