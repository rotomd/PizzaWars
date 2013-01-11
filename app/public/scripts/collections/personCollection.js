/*
*   collection for shops
*   initializes and exposes the personCollection.
*/

define(
    ['backbone', 'jquery', 'underscore', 'models/PersonModel'],
    function(Backbone, $, _, PersonModel){
        var PersonCollection = Backbone.Model.extend({
            
            url: '/api/people',
            
            model: PersonModel,
            
            initialize: function(){
                console.log('initing people');
                //this.fetch();
                
                //this.on('reset', function() {
                //    console.log('shop collection reset');
                //});
                
            }
        });
        
        return new PersonCollection();
    }
);