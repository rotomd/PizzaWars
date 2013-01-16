/*
*   ranking view
*/

define(
    ['backbone', 'jquery', 'underscore', 'templates/rankingViewTemplate'],     
    function(Backbone, $, _, rankingViewTemplate){
        var RankingView = Backbone.View.extend({

            initialize: function(){
                console.log('ranking view init');
                
                this.render();
            },
            
            render: function(){
                //console.log(rankingViewTemplate);
                console.log(this.collection.toJSON());
                
                this.$el.html( rankingViewTemplate( this.collection.toJSON() ) );
            }
        });
        
        return RankingView;
    }
);