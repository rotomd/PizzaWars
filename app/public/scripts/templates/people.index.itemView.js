define(["lib/jade-runtime"], function(jade) { return function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: "/var/lib/stickshift/c00fdb5af15e43dcb7a8c26a8b7cfc41/app-root/data/370242/app/views/people.index.itemView.jade" }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = locals.first
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = locals.last
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<td>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
// iterate locals.rankings
;(function(){
  if ('number' == typeof locals.rankings.length) {

    for (var i = 0, $$l = locals.rankings.length; i < $$l; i++) {
      var ranking = locals.rankings[i];

__jade.unshift({ lineno: 4, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('' + escape((interp = i+1) == null ? '' : interp) + ': ' + escape((interp = ranking) == null ? '' : interp) + ' <br/>');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var i in locals.rankings) {
      $$l++;      var ranking = locals.rankings[i];

__jade.unshift({ lineno: 4, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('' + escape((interp = i+1) == null ? '' : interp) + ': ' + escape((interp = ranking) == null ? '' : interp) + ' <br/>');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
    }

  }
}).call(this);

__jade.shift();
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
} });