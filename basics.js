//Want to quit your running Node.js server?You can always do that by pressing CTRL + C in the terminal/ 
// command prompt window where you started your server (i.e. where you ran node app.js).

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-type', 'text/html');
    res.write('</html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1><body>');
    res.write('</html>');
    res.end(); //stop writing here
});

server.listen(3000);
