/*
*   collection for shops
*   creates the CommentCollection constructor
*/

define(
    ['backbone', 'jquery', 'underscore', 'models/Comment'],
    function(Backbone, $, _, CommentModel){
        var CommentCollection = Backbone.Model.extend({
            
            url: '/api/comments:shop',
            
            model: CommentModel,
            
            initialize: function(){
                console.log('initing comment collection');
                //this.fetch();
                
                //this.on('reset', function() {
                //    console.log('shop collection reset');
                //});
                
            }
        });
        
        return CommentCollection;
    }
);