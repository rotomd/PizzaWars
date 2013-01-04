/*
    main/first executed client side script.
*/

/*
example of client side jade template usage:
require(['../templates/index'], function(parse) {
    document.body.innerHTML = parse({
      template_var: 'hello world'
    });
});
*/

//configure require.js
// simplify requiring the common libraries.
require.config({
  paths: {
    jquery: 'lib/jquery/jquery',
    underscore: 'lib/underscore/underscore',
    backbone: 'lib/backbone/backbone'
  }
});