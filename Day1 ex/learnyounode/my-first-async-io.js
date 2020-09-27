const fs = require('fs');
let file = process.argv[2];

fs.readFile(file, 'utf8', function (err, lines) {
  if (err) {
    return console.log(err);
  }
  let lineCount = lines.split('\n').length -1
  console.log(lineCount)
})


