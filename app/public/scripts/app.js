/*
*   app initialization code.
*   needed?
*/
define([
  'jquery', 
  'underscore', 
  'backbone',
  'datatables',
  'highcharts',
  'router'
], function($, _, Backbone, dataTables, highcharts, router){
  
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    router.initialize();
  };

  return { 
    initialize: initialize
  };
});