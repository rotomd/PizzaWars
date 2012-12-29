/*
    SERVER SIDE PRE-COMPILED TEMPLATES
   compiles templates and returns the functions created by that.
    allows us to render templates on the server side a bit quicker...
    
    these templates should only be required/compiled once,
    before the server starts, and just kept in memory off of the templates object
*/

var jade = require('jade');

exports.index = getCompiledTemplate('/templates/index.jade');

/*  given the path to a template, returns the function that compiling that
 //   template produces.
*/
function getCompiledTemplate(templatePath){
    //get the path to the file
    var path = __dirname + templatePath,
    
    //get the text of the file
        text = require('fs').readFileSync(path, 'utf8'),
                
        
    //set the options
        options = {
            client:false,
            compileDebug: false,
            filename: path
        };
          
    return jade.compile(text, options);    
}