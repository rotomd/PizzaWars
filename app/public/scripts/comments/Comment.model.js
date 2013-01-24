/*
*   model for comment
*   exposes a constructor
*/

define(
    ['backbone', 'jquery', 'underscore'],
    function(Backbone, $, _){
        var CommentModel = Backbone.Model.extend({
            defaults: {
                
            },
            
            initialize: function(){
                console.log('made a comment model');
            }
        });
        
        return CommentModel;
    }
);