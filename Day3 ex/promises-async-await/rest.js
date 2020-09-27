const http = require("http");
const secondAssignmentRefactored = require('./cryptoModule')

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/secure-randoms"){
    res.setHeader('Content-Type', 'application/json');
    let randomBytes = await secondAssignmentRefactored([48, 40, 32, 24, 16, 8]);
    res.write(JSON.stringify(randomBytes));
    return res.end();
  }
});


server.listen(3000);
console.log('Listening on port 3000')