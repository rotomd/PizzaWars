define(["/scripts/lib/jade/runtime.js"], function() { return function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: "/var/lib/stickshift/8ccdbd49be4442d8a042e69f70cb1e77/app-root/data/364591/app/views/templates/shops.jade" }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div id="shops">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<table>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<tr>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<th>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('Rank');
__jade.shift();
__jade.shift();
buf.push('</th>');
__jade.shift();
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('<th>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
buf.push('Name');
__jade.shift();
__jade.shift();
buf.push('</th>');
__jade.shift();
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('<th>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('Date Ordered');
__jade.shift();
__jade.shift();
buf.push('</th>');
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
buf.push('<th>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
buf.push('Address');
__jade.shift();
__jade.shift();
buf.push('</th>');
__jade.shift();
__jade.shift();
buf.push('</tr>');
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
if ( locals.shops)
{
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
// iterate shops
;(function(){
  if ('number' == typeof shops.length) {

    for (var $index = 0, $$l = shops.length; $index < $$l; $index++) {
      var shop = shops[$index];

__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<tr>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push(' ');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.rank
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.name
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 13, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.dateOrdered
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.address
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.shift();
buf.push('</tr>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in shops) {
      $$l++;      var shop = shops[$index];

__jade.unshift({ lineno: 9, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<tr>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push(' ');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.rank
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.name
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 13, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.dateOrdered
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = shop.address
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.shift();
buf.push('</tr>');
__jade.shift();
__jade.shift();
    }

  }
}).call(this);

__jade.shift();
__jade.shift();
}
__jade.shift();
__jade.shift();
buf.push('</table>');
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