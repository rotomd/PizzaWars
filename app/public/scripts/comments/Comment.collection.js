/*
*   collection for comments
*   creates the CommentCollection constructor
*/

define(
    ['backbone', 'jquery', 'underscore', 'comments/Comment.model'],
    function(Backbone, $, _, CommentModel){
        var CommentCollection = Backbone.Collection.extend({
            
            url: '/api/comments:shop',
            
            model: CommentModel,
            
            initialize: function(){
                console.log('initing comment collection');                
            }
        });
        
        return CommentCollection;
    }
);