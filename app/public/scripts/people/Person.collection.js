/*
*   collection for persons
*   returns constructor
*/

define(
    ['backbone', 'jquery', 'underscore', 'people/Person.model'],
    function(Backbone, $, _, PersonModel){
        var PersonCollection = Backbone.Collection.extend({
            
            url: '/api/people',
            
            model: PersonModel,
            
            initialize: function(){
                console.log('initing people');         
                
            }
        });
        
        return PersonCollection;
    }
);