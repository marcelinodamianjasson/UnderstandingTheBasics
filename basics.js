//Want to quit your running Node.js server?You can always do that by pressing CTRL + C in the terminal/ 
// command prompt window where you started your server (i.e. where you ran node app.js).

//below is the modules used in the app
const http = require('http');
const fs = require('fs');


//Below is the actual code where the above modules is needed
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
    res.write('</html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
          const prasedBody = Buffer.concat(body).toString();
          const message = prasedBody.split('=')[1];
          fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302; //302 is a redirect
        res.setHeader = ('Location', '/');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('</html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); //stop writing here
});

server.listen(3000);
