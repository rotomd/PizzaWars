/*
*   shops view
*/

define(
    ['backbone', 'jquery', 'underscore', 'templates/shops', 'datatables'],     
    function(Backbone, $, _, indexTemplate, shopsTemplate, dataTables){
        var ShopsView = Backbone.View.extend({
           
            //the element for this view
            el: '#shops table',
           
            template: shopsTemplate,
           
            initialize: function(){
                this.$el.dataTable({});
            }           
        });
        
        return ShopsView;
    }
);