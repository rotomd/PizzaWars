/*
*   shop view -> has two sub views, ShopGraphView and ShopCommentsView
*/

define(
    ['backbone', 'jquery', 'underscore'],     
    function(Backbone, $, _, indexTemplate){
        var ShopView = Backbone.View.extend({
            
           
            initialize: function(){
              
                console.log('shop view init');
            },
            
            render: function(){               
                
            }
        });
        
        return ShopView;
    }
);