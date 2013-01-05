define([
    'jquery',
	'backbone'
], function( $, Backbone ) {

	var Workspace = Backbone.Router.extend({
		routes:{
			'*filter': 'setFilter'
		}
	});

	return Workspace;
});