// var fs = require('fs');
// var contents = fs.readFileSync('/nodejs/node_global/node_modules/learnyounode/node_apidoc/fs.html').toString();
// console.log(contents.split('\n').length);

var fs = require('fs'),
    filename = process.argv[2];

var data = fs.readFileSync(filename, 'utf8');

console.log(data.split('\n').length - 1);