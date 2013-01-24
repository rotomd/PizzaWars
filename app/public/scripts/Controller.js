/*
*   controller
*   defines functions for init-ing views
*/

define([
    'backbone',
    'marionette',
    'underscore',
    'jquery',
    'app',
    'vent',
    
    //shops stuff:
    'shops/Shop.collection',
    'shops/views/index/Shop.collectionView',
    
    //people stuff
    'people/Person.model',
    'people/Person.collection',
    'people/views/index/Person.collectionView',
    
    //person info view
    'people/views/info/Person.layout',
    
    //other stuff
    'templates/index-layout'
    
], 
function(Backbone, mr, _, $, app, vent,
    
    //shop stuff:
    ShopCollection,
    ShopCollectionView,
    
    //people stuff
    PersonModel,
    PersonCollection,
    PersonCollectionView,
    
    //person info view
    PersonLayout,
    
    //other stuff
    indexTemplate
    
){
    
    return mr.Controller.extend({
        
        //initialize an index view.
        index: function(){
            
            console.log('index');
            
            //get a collection of people and a collection of shops
            var shopCollection = app.shopCollection = new ShopCollection();
            var personCollection = app.personCollection = new PersonCollection();
            
            shopCollection.fetch();
            personCollection.fetch();      
            
            
            //init an index layout with a shops and people region
            var IndexLayout = mr.Layout.extend({
                template: indexTemplate,
                regions: {
                    people: '#people',
                    shops: '#shops'
                }                
            });
            
            var layout = new IndexLayout();
            //layout.render();
            
            //show the layout in the app's main region.
            app.mainRegion.show(layout);  

            
            //show the shops and people regions in the layout.
            layout.people.show(new PersonCollectionView({collection: personCollection}));
            layout.shops.show(new ShopCollectionView({collection: shopCollection}));
        },
        
        person: function(id){
            
            //get the model for the person with this id
            var person = new PersonModel({id: id});
            //put the layout for a person info view in the main region of the page
            var layout = new PersonLayout();
            app.mainRegion.show(layout);
            
            
            
            
            
           // layout.shops.show(new PersonShopCollectionView());
        },
        
        catchall: function(attemptedUrl){
            console.log(attemptedUrl);
        }
        
        
    });
    
});