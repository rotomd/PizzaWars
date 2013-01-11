/*
*   ranking view
*/

define(
    ['backbone', 'jquery', 'underscore'],     
    function(Backbone, $, _){
        var RankingView = Backbone.View.extend({

            initialize: function(){
                console.log('ranking view init');
            }           
        });
        
        return RankingView;
    }
);