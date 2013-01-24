/*
*   model for person
*   exposes a constructor
*/

define(
    ['backbone', 'jquery', 'underscore'],
    function(Backbone, $, _){
        var PersonModel = Backbone.Model.extend({
            
            idAttribute: '_id',
            
            url: '/api/people/',
            
            defaults: {
                
            },
            
            initialize: function(options){                
                //this.id = options.id
                console.log('made a person model');
            }
        });
        
        return PersonModel;
    }
);