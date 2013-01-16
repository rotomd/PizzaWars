/*
*   shops view
*/

define(
    ['backbone', 'jquery', 'underscore', 'datatables'],     
    function(Backbone, $, _, indexTemplate, dataTables){
        var ShopsView = Backbone.View.extend({
                       
            initialize: function(){
                console.log('shops view init');
                
                var that = this;
                
                that.collection.on('sync', function(){
                    that.render(); 
                });
            },
            
            render: function(){
                console.log('shop view render');
             
                this.$el.dataTable({
                    aaData: this.collection.toJSON(),
                    aoColumnDefs: [
                        {
                            aTargets: [0],
                            mData: function(source, type, val){
                                return source.name || '';
                            },
                            sTitle: 'Name'
                        },
                        {
                            aTargets: [1],
                            mData: function(source, type, val){
                                if(type === 'display') {
                                    return source.score || '';
                                }
                                return source.score || -1;
                            },
                            sTitle: 'Score'
                        }
                    ],
                    aaSorting: [[1, 'desc']]
                });
            }
        });
        
        return ShopsView;
    }
);