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
            vent.on('click:index:person', this.initPersonInfoView);            
        },
        
        initPersonInfoView: function(person){
            //put the person info view layout on the page
            console.log(person);
            
            //render a new person info view into that layout, 
            //  passing in the person as the model.
            var layout = new PersonInfoLayout();
            
            app.mainRegion.show(layout);
            
            //extract the rankings from the person model
            var rankings = person.get('rankings');
            
            
            layout.shops.show( new PersonShopCollectionView({shops: rankings}) );
        },
        
        initRankingView: function(person){
            //person is either a model or an id.
            //if it is a model, just render the ranking view for that model.
            
            //if it is an id, get the model for that id from the server, 
            //then do what you did for the model
            if(typeof person === 'object'){
                this.renderRankingView(person);
            } else {
                var personModel = new PersonModel({id: person});
                personModel.fetch();
                
            }
        }
    });
    
    return new Controller();
});