/*
*   controller
*   defines functions for init-ing views
*   This controller is really just the app's main router's errand boy. 
*   It just executes the init functions for routes.
*/

define([
    'backbone',
    'marionette',
    'underscore',
    'jquery',
   // 'app',
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
    
    'login/Login.controller'
    
], 
function(Backbone, mr, _, $, //app, 

    vent,
    
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
        
        initialize: function(){
           // personController.on('show:mainRegion', this.passEvent, this);
        },
        
        passEvent: function(){
            //this.trigger()
        },
        
        //initialize an index view.
        index: function(){
                        
            
            //get a collection of people and a collection of shops
            var shopCollection = /*app.shopCollection =*/ new ShopCollection();
            var personCollection = /* app.personCollection = */ new PersonCollection();
            
            shopCollection.fetch();
            personCollection.fetch();      
            
            vent.trigger('set', 'shopCollection', shopCollection);
            vent.trigger('set', 'personCollection', personCollection);
            
            
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
            //app.mainRegion.show(layout);  
       
            vent.trigger('show', 'mainRegion', layout);
            
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
        
        rankShops: function(){        
            //if the person is logged in, get their model from the collection and send them to the shop ranking view.
//            if(loginController.authKey){
//                personController.initRankingView(id);
//            } else {
//                console.log('not logged in');
//            }
            this.once('got', this.showRankingView, this);
            vent.trigger('get', ['currentUser'], this);
            
        },
        
        showRankingView: function(currentUser){
            //if current user is defined, get the data for the current user
            // (without trusting client, of course)
            // and render the ranking view with that data
            
            //if current user is undefined, just redirect home.
            if(currentUser){
                console.log('able to render the ranking view');
            } else {
                Backbone.history.navigate('/', {trigger: true});    
            }
        },
        
        catchall: function(attemptedUrl){
            console.log(attemptedUrl);
        }
        
        
    });
    
});