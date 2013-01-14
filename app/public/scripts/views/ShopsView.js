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
                
                //console.log('slice? ' + this.collection.toJSON().slice);
                
                this.$el.dataTable({
                    aaData: this.collection.toJSON(),
                    aoColumnDefs: [
                        {
                            aTargets: [0],
                            mData: 'name',
                            sTitle: 'Name'
                        },
                        {
                            aTargets: [1],
                            mData: 'score',
                            sTitle: 'Score'
                        }
                    ]
                });
            }
        });
        
        return ShopsView;
    }
);