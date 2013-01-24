/*
*   layout for a person info view 
*/

define([
    'backbone' ,
    'marionette',
    'jquery',
    'templates/person.info.layout'
], 
function(Backbone, mr, $, template){
    
    var DivRegion = mr.Region.extend({
        tagName: 'div'
    });
    
    var Layout = mr.Layout.extend({  
        template: template,
        regions: {
            person: '.person-info-name',
            shops: '.person-info-shops'
        }                
    });
    
    return Layout;
    
});