define(["scripts/lib/jade-runtime.js"], function(jade) { return function(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var __jade = [{ lineno: 1, filename: "/var/lib/stickshift/c00fdb5af15e43dcb7a8c26a8b7cfc41/app-root/data/370242/app/views/index.jade" }];
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
buf.push('<script src="/scripts/lib/require.js" type="text/javascript" data-main="scripts/main">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.shift();
buf.push('</script>');
__jade.shift();
__jade.unshift({ lineno: 8, filename: __jade[0].filename });
buf.push('<!-- adding jquery to test some posting of data-->');
__jade.shift();
__jade.unshift({ lineno: 9, filename: __jade[0].filename });
buf.push('<!-- script(src="http://code.jquery.com/jquery-1.8.3.min.js", type="text/javascript", data-main="scripts/main")-->');
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
buf.push(' ');
__jade.shift();
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('<a href="/">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 12, filename: __jade[0].filename });
buf.push('Pizza Wars');
__jade.shift();
__jade.shift();
buf.push('</a>');
__jade.shift();
__jade.shift();
buf.push('</h1>');
__jade.shift();
__jade.unshift({ lineno: 14, filename: __jade[0].filename });
buf.push('<div class="section group">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 1, filename: "/var/lib/stickshift/c00fdb5af15e43dcb7a8c26a8b7cfc41/app-root/data/370242/app/views/side-menu.jade" });
__jade.unshift({ lineno: 1, filename: __jade[0].filename });
buf.push('<div id="side-menu" class="col span_1_of_4">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<ul>');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('<li id="rank-shops">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 3, filename: __jade[0].filename });
buf.push('Rank Shops');
__jade.shift();
__jade.shift();
buf.push('</li>');
__jade.shift();
__jade.unshift({ lineno: 4, filename: __jade[0].filename });
buf.push('<li id="next-shop">');
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
__jade.unshift({ lineno: 16, filename: __jade[0].filename });
buf.push('<div id="content" class="col span_3_of_4">');
__jade.unshift({ lineno: undefined, filename: __jade[0].filename });
__jade.unshift({ lineno: 18, filename: __jade[0].filename });
buf.push('<!--include shops-->');
__jade.shift();
__jade.unshift({ lineno: 20, filename: __jade[0].filename });
buf.push('<!--include participants-->');
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