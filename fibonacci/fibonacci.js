var http = require("http")

function fibonacci(n) {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url == "/fibo")
        res.end('Fibo: ' + fibonacci(44) + '\n');
    else
        res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
