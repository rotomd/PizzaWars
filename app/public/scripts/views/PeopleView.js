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
                
                that.collection.on('sync', function(){
                    that.render(); 
                });  
            },
            
            render: function(){
                console.log('people view render');
                //console.log(this);
                
                console.log(this.collection);
                
                this.$el.dataTable({
                    aaData: this.collection.toJSON(),
                    aoColumnDefs: [
                        {
                            aTargets: [0],
                            mData: function(source, type, val){
                                return source.first || '';
                            },
                            sTitle: 'First Name'
                        },
                        {
                            aTargets: [1],
                            mData: function(source, type, val){
                                return source.last || '';
                            },
                            sTitle: 'Last Name'
                        },
                        {
                            aTargets: [2],
                            mData: function(source, type, val){
                                return source.rankings[0] || '';
                            },
                            sTitle: 'Favorite Shop'
                        }
                    ]
                });
            }
        });
        
        return PeopleView;
    }
);