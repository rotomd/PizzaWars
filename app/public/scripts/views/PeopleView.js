/*
*   people view
*/

define(
    ['backbone', 'jquery', 'underscore'],     
    function(Backbone, $, _){
        var PeopleView = Backbone.View.extend({

            initialize: function(){
                console.log('people view init');
                
                var that = this;
                
                that.collection.on('reset', function(){
                    that.render(); 
                });  
            },
            
            render: function(){
                console.log('people view render');
                //console.log(this);
                
                this.$el.dataTable({
                    aaData: this.collection.toJSON(),
                    aoColumnDefs: [
                        {
                            aTargets: [0],
                            mData: function(source, type, val){
                                return val;
                            }
                        }
                    ]
                });
            }
        });
        
        return PeopleView;
    }
);