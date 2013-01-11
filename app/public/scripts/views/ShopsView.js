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
                
                that.collection.on('reset', function(){
                    that.render(); 
                });
            },
            
            render: function(){
                console.log('shop view render');
                
                console.log(this.collection.toJSON());
                
                this.$el.dataTable({
                    aaData: this.collection.toJSON(),
                    aoColumnDefs: [
                        {
                            aTargets: [0],
                            mData: 'available'
                        }
                    ]
                });
            }
        });
        
        return ShopsView;
    }
);