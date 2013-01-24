/*
*   definition of router.
*   exposes the router constructor
*/

define([
    'jquery',
	'backbone',
    'underscore',
    'marionette'
], function( $, Backbone, _, mr) {
    
	return mr.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'person:id': 'person',
            '*notFound': 'catchall'
        }
	});
});