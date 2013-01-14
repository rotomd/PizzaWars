/*
*   model for person
*   exposes a constructor
*/

define(
    ['backbone', 'jquery', 'underscore'],
    function(Backbone, $, _){
        var PersonModel = Backbone.Model.extend({
            
            idAttribute: '_id',
            
            defaults: {
                
            },
            
            initialize: function(){
                console.log('made a person model');
            }
        });
        
        return PersonModel;
    }
);