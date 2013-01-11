/*
*   shop comments view
*/

define(
    ['backbone', 'jquery', 'underscore'],     
    function(Backbone, $, _, indexTemplate){
        var ShopCommentsView = Backbone.View.extend({
                
           
            initialize: function(){
                //this.collection = new ShopsCollection();
                
                //this.$el.dataTable({});
                console.log('shop comments view init');
            },
            
            render: function(){
               
                
            }
        });
        
        return ShopCommentsView;
    }
);