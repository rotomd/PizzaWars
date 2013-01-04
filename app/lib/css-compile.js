/*
  Compiler for stylus
  
  For each file you want compiled, provide the full path to the file and the full path to 
  the place you want the compiled version to go.  
  
  executing this is easy:
  node lib/css-compile.js
*/

var spawn = require('child_process').spawn,
  files = [
    {
      'in': '/public/style/stylus/style.styl',
      'out': '/public/style/'
    }    
  ],  
  abs_path = '',    
  get_path = spawn('pwd', []);
  
get_path.stdout.on('data', function(data) {
    abs_path += data;    
});

get_path.on('exit', function(code){   
    var i;
    abs_path = abs_path.replace(/\s/gi, '');
    console.log('path is ' + abs_path);
    if(abs_path){
        for(i=0; i<files.length; i++){
          run(files[i]);
        }
    }
});
  
    
  //create a process to do the compilation
function run(file){
  file.process = spawn('stylus', [ abs_path + file['in'], '-o', abs_path + file['out'] ]);
  file.process.stdout.on('data', function(data) {
    console.log(data.toString());
  });
  file.process.stderr.on('data', function(data){
    console.log(data.toString());
  });
  file.process.on('exit', function(code){
    console.log('Process for file ' + file['in'] + ' exited with code ' + code);
  });  
}
  

  