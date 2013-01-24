/*
*   controller for person/people functionality
*/

define([
    'backbone',
    'marionette',
    'underscore',
    'jquery',
    'app',
    'vent',
    
    //people stuff
    'people/Person.model',
    'people/Person.collection',
    'people/views/index/Person.collectionView',
    
    //person info view
    'people/views/info/Person.layout',
    'people/views/info/Person.shopCollectionView'
    
    ], 
function(Backbone, mr, _, $, app, vent,
    
    PersonModel,
    PersonCollection,
    PersonCollectionView,
    
    PersonInfoLayout,
    PersonShopCollectionView
){
    
    var Controller = mr.Controller.extend({
        
        initialize: function(){                     
            this.on('click:index:person', this.initPersonInfoView);            
        },
        
        initPersonInfoView: function(person){
            //put the person info view layout on the page
            
            //render a new person info view into that layout, 
            //  passing in the person as the model.
            var layout = new PersonInfoLayout();
            
            app.mainRegion.show(layout);
            
            //extract the rankings from the person model
            var rankings = person.get('rankings');
            
            
            layout.shops.show(new PersonShopCollectionView({collection: rankings}));
        }
    });
    
    return new Controller();
});