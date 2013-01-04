define(["/scripts/lib/jade/runtime.js"], function() { return function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: "/var/lib/stickshift/8ccdbd49be4442d8a042e69f70cb1e77/app-root/data/364591/app/views/templates/shop-detail.jade" }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div id="shop-detail">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 2, filename: __jade[0].filename });
buf.push('<h2>');
var __val__ = name
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</h2>');
__jade.shift();
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<h3>');
var __val__ = rank
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</h3>');
__jade.shift();
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<div id="shop-detail-chart">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<div id="shop-detail-comments">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
} });