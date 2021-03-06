//var define = require('requirejs').define;
var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    jade = require('jade');

//define(['fs', 'path', 'mkdirp', 'jade'], function(fs, path, mkdirp, jade) {

var basename = path.basename;
var dirname = path.dirname;
var resolve = path.resolve;
var join = path.join;

exports.jadeCompile = function(path, out, options) {
    // filename
    if (out)
      options.filename = out;

    if (!(path instanceof Array))
      path = [path];

    // left-over args are file paths
    var files = path;

    // compile files
    for (var i = 0; i < files.length; i++)
      renderFile(files[i]);

    /**
     * Process the given path, compiling the jade files found.
     * Always walk the subdirectories.
     */
    function renderFile(path) {
      var re = /\.jade$/;
      fs.lstat(path, function(err, stat) {
        if (err) throw err;
        // Found jade file
        if (stat.isFile() && re.test(path)) {
          fs.readFile(path, 'utf8', function(err, str) {
            if (err) throw err;
            options.filename = path;
            var fn = jade.compile(str, options).toString().substring(18);
            path = path.replace(re, '.js');
            if (out) path = join(out, basename(path));
            var dir = resolve(dirname(path));
            mkdirp(dir, 0755, function(err){
              if (err) throw err;
              fs.writeFile(path, 'define(["/scripts/lib/jade-runtime.js"], function(jade) { return function' + fn + ' });', function(err){
                if (err) throw err;
                //console.log('  33[90mrendered 33[36m%s33[0m', path);
              });
            });
          });
        // Found directory
        } else if (stat.isDirectory()) {
          fs.readdir(path, function(err, files) {
            if (err) throw err;
            var dirfiles = files.map(function(filename) {
              return path + '/' + filename;
            });
            for (var i = 0; i < dirfiles.length; i++)
              renderFile(dirfiles[i]);
          });
        }
      });
    }
};
//});