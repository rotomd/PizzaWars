define(["/scripts/lib/jade-runtime.js"], function(jade) { return function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: "/var/lib/stickshift/72e585fbba0648d986620bafc3bf29c4/app-root/data/356386/app/views/index.jade" }];
try {
var buf = [];
with (locals || {}) {
var interp;
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<!DOCTYPE html>');
__jade.shift();
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<html>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<head>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<title>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('Pizza Wars');
__jade.shift();
__jade.shift();
buf.push('</title>');
__jade.shift();
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
buf.push('<link rel="stylesheet" href="/style/style.css">');
__jade.shift();
__jade.unshift({ lineno: 7, filename: __jade[0].filename });
buf.push('<script src="/scripts/lib/require/require.js" type="text/javascript" data-main="scripts/main">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</script>');
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<!-- adding jquery to test some posting of data-->');
__jade.shift();
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
buf.push('<script src="http://code.jquery.com/jquery-1.8.3.min.js" type="text/javascript" data-main="scripts/main">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</script>');
__jade.shift();
__jade.shift();
buf.push('</head>');
__jade.shift();
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<body>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 10, filename: __jade[0].filename });
buf.push('<div id="wrapper">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<h1 class="main-title section group">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('Pizza Wars');
__jade.shift();
__jade.shift();
buf.push('</h1>');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<div class="section group">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: "/var/lib/stickshift/72e585fbba0648d986620bafc3bf29c4/app-root/data/356386/app/views/side-menu.jade" });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div id="side-menu" class="col span_1_of_4">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<ul>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<li>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('Rank Shops');
__jade.shift();
__jade.shift();
buf.push('</li>');
__jade.shift();
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<li>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('Get Next Shop');
__jade.shift();
__jade.shift();
buf.push('</li>');
__jade.shift();
__jade.shift();
buf.push('</ul>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<div id="content" class="col span_3_of_4">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: "/var/lib/stickshift/72e585fbba0648d986620bafc3bf29c4/app-root/data/356386/app/views/shops.jade" });
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
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('<td>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
// iterate shop.address
;(function(){
  if ('number' == typeof shop.address.length) {

    for (var $index = 0, $$l = shop.address.length; $index < $$l; $index++) {
      var line = shop.address[$index];

__jade.unshift({ lineno: 15, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('' + escape((interp = line) == null ? '' : interp) + ' <br/>');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in shop.address) {
      $$l++;      var line = shop.address[$index];

__jade.unshift({ lineno: 15, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('' + escape((interp = line) == null ? '' : interp) + ' <br/>');
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
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
buf.push('<td>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 15, filename: __jade[0].filename });
// iterate shop.address
;(function(){
  if ('number' == typeof shop.address.length) {

    for (var $index = 0, $$l = shop.address.length; $index < $$l; $index++) {
      var line = shop.address[$index];

__jade.unshift({ lineno: 15, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('' + escape((interp = line) == null ? '' : interp) + ' <br/>');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in shop.address) {
      $$l++;      var line = shop.address[$index];

__jade.unshift({ lineno: 15, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('' + escape((interp = line) == null ? '' : interp) + ' <br/>');
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
__jade.unshift({ lineno: 1, filename: "/var/lib/stickshift/72e585fbba0648d986620bafc3bf29c4/app-root/data/356386/app/views/participants.jade" });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div id="participants">');
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
buf.push('Name');
__jade.shift();
__jade.shift();
buf.push('</th>');
__jade.shift();
__jade.shift();
buf.push('</tr>');
__jade.shift();
__jade.unshift({ lineno: 5, filename: __jade[0].filename });
if ( locals.participants)
{
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
__jade.unshift({ lineno: 6, filename: __jade[0].filename });
// iterate participants
;(function(){
  if ('number' == typeof participants.length) {

    for (var $index = 0, $$l = participants.length; $index < $$l; $index++) {
      var participant = participants[$index];

__jade.unshift({ lineno: 6, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<tr>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = participant.first
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = participant.last
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<td>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
// iterate participant.rankings
;(function(){
  if ('number' == typeof participant.rankings.length) {

    for (var i = 0, $$l = participant.rankings.length; i < $$l; i++) {
      var ranking = participant.rankings[i];

__jade.unshift({ lineno: 11, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('' + escape((interp = i+1) == null ? '' : interp) + ': ' + escape((interp = ranking) == null ? '' : interp) + ' <br/>');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var i in participant.rankings) {
      $$l++;      var ranking = participant.rankings[i];

__jade.unshift({ lineno: 11, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
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
buf.push('</tr>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in participants) {
      $$l++;      var participant = participants[$index];

__jade.unshift({ lineno: 6, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<tr>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = participant.first
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
buf.push('<td>');
var __val__ = participant.last
buf.push(escape(null == __val__ ? "" : __val__));
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</td>');
__jade.shift();
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
buf.push('<td>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 11, filename: __jade[0].filename });
// iterate participant.rankings
;(function(){
  if ('number' == typeof participant.rankings.length) {

    for (var i = 0, $$l = participant.rankings.length; i < $$l; i++) {
      var ranking = participant.rankings[i];

__jade.unshift({ lineno: 11, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('' + escape((interp = i+1) == null ? '' : interp) + ': ' + escape((interp = ranking) == null ? '' : interp) + ' <br/>');
__jade.shift();
__jade.shift();
buf.push('</span>');
__jade.shift();
__jade.shift();
    }

  } else {
    var $$l = 0;
    for (var i in participant.rankings) {
      $$l++;      var ranking = participant.rankings[i];

__jade.unshift({ lineno: 11, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<span>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
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
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
buf.push('</div>');
__jade.shift();
__jade.shift();
buf.push('</body>');
__jade.shift();
__jade.shift();
buf.push('</html>');
__jade.shift();
__jade.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __jade[0].filename, __jade[0].lineno);
}
} });