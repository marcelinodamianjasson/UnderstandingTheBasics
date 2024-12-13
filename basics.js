//Want to quit your running Node.js server?You can always do that by pressing CTRL + C in the terminal/ 
// command prompt window where you started your server (i.e. where you ran node app.js).

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit();
});

server.listen(3000);
