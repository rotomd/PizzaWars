/*
*   side menu view
*/

define(
    ['backbone', 
    'marionette',
    'jquery', 
    'underscore'
    ],     
    function(Backbone, mr, $, _) {
        var SideMenuView = mr.ItemView.extend({
          
            initialize: function(){
                console.log('side menu view init');
            },
            
            events: {
                "click #rank-shops a": "rankShops"
            },
            
            rankShops: function(event){
                event.preventDefault(); 
                
                Backbone.history.navigate('/rank', {trigger:true});
            }
        });
        
        return SideMenuView;
    }
);