/*
*   view for a collection of people in the index
*/

define([
    
    'backbone',
    'underscore',
    'marionette',
    'jquery',
    'people/views/index/Person.itemView'
    
    ], 
    function(Backbone, _, mr, $, PersonItemView){
        
        var CollectionView = mr.CollectionView.extend({
            itemView: PersonItemView,
            tagName: 'table',
            
            initialize: function(){
                
            }
        });            
        
        return CollectionView;
        
    });