/*
*   layout for a person info view 
*/

define([
    'backbone' ,
    'marionette',
    'jquery'
], 
function(Backbone, mr, $){
    
    var DivRegion = mr.Region.extend({
        tagName: 'div'
    });
    
    var Layout = mr.Layout.extend({        
        regions: {
            people: DivRegion,
            shops: DivRegion
        }                
    });
    
    return Layout;
    
});