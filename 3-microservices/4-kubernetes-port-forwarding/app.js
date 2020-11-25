const http = require('http');

const listener = (req, res) => {
    const {url, method} = req;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body><h3>Hello darkness my old friend :)</h3>' +
            '<form action="/create-user" method="post">' +
            '<input type="text" name="username">' +
            '<button type="submit">Save</button>' +
            '</form></body>');
        res.write('</html>');

        return res.end(); // set that there is not going to be any write calls anymore
    } else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');

        return res.end(); // set that there is not going to be any write calls anymore
    } else if (url === '/create-user' && method === 'POST') {

        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];

            console.log(username);

            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    }

}


const server = http.createServer(listener);

server.listen(3000);