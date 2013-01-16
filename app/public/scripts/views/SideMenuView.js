/*
*   side menu view
*/

define(
    ['backbone', 'jquery', 'underscore', 'router'],     
    function(Backbone, $, _, router) {
        var SideMenuView = Backbone.View.extend({
           
            //the element for this view
            el: '#side-menu',
           
            initialize: function(){
                console.log('side menu view init');
            },
            
            events: {
                "click #rank-shops": "rankShops",
                "click #next-shop": "nextShop"
            },
            
            rankShops: function(event){
                event.preventDefault();                
                router.navigate('ranking', {trigger: true});
            },
            
            nextShop: function(event){
                
            }
        });
        
        return SideMenuView;
    }
);