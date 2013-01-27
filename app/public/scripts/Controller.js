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
    
    'people/person.controller',
    
    //other stuff
    'templates/index-layout',
    
    'login/login.controller'
    
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
    
    //controller for all things people related.
    personController,
    
    //other stuff
    indexTemplate,
    
    //login controller included so we can check whether people are authorized.
    loginController
    
){
    
    return mr.Controller.extend({
        
        //initialize an index view.
        index: function(){
                        
            
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
            person.fetch({
                success: function(model, response, options) {
                    personController.initPersonInfoView(model);
                }
            });
        },
        
        rankShops: function(id){        
            //if the person is logged in, get their model from the collection and send them to the shop ranking view.
            if(loginController.authKey){
                personController.initRankingView(id);
            } else {
                console.log('not logged in');
            }
        },
        
        catchall: function(attemptedUrl){
            console.log(attemptedUrl);
        }
        
        
    });
    
});