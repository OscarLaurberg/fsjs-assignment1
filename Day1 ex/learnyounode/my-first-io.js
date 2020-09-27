const fs = require('fs');

bufferObject = fs.readFileSync(process.argv[2]);
bufferStringArray = bufferObject.toString().split('\n');

console.log(bufferStringArray.length-1);

