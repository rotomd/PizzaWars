var rack = require('asset-rack');

exports.assets = new rack.AssetRack([
    new rack.JadeAsset({
        url: '/views.js',
        dirname: __dirname + '/views/templates'
    })
]);

