/*
*   model for person
*   exposes a constructor
*/

define(
    ['backbone', 'jquery', 'underscore'],
    function(Backbone, $, _){
        var PersonModel = Backbone.Model.extend({
            defaults: {
                
            },
            
            initialize: function(){
                console.log('made a person model');
            }
        });
        
        return PersonModel;
    }
);