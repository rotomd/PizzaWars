/*
*   shop graph view
*/

define(
    ['backbone', 'jquery', 'underscore'],     
    function(Backbone, $, _, indexTemplate){
        var ShopGraphView = Backbone.View.extend({
                
           
            initialize: function(){
                //this.collection = new ShopsCollection();
                
                //this.$el.dataTable({});
                console.log('shop graph view init');
            },
            
            render: function(){
               
                
            }
        });
        
        return ShopGraphView;
    }
);