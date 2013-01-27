/*
*   side menu view
*/

define(
    ['backbone', 
    'jquery', 
    'underscore'
    ],     
    function(Backbone, $, _) {
        var SideMenuView = Backbone.View.extend({
           
            //the element for this view
            el: '#side-menu',
           
            initialize: function(){
                console.log('side menu view init');
            },
            
            events: {
                "click #rank-shops": "rankShops"
            },
            
            rankShops: function(event){
                event.preventDefault(); 
                
            }
        });
        
        return SideMenuView;
    }
);