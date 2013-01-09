/*
*   shops view
*/

define(
    ['backbone', 'jquery', 'underscore', 'templates/shops', 'datatables', 'collections/shops'],     
    function(Backbone, $, _, indexTemplate, shopsTemplate, dataTables, ShopsCollection){
        var ShopsView = Backbone.View.extend({
           
            //the element for this view
            //el: 'div',
           
            //template: shopsTemplate,
           
            initialize: function(){
                //this.collection = new ShopsCollection();
                
                //this.$el.dataTable({});
            },
            
            render: function(){
                var $table = $('<table>');
                this.$el.html( $table );
                
                //window.shops = this.collection;
                //console.log(this.collection);
                //$table.dataTable( this.collection.toJSON() );
                return this;
                
            }
        });
        
        return ShopsView;
    }
);