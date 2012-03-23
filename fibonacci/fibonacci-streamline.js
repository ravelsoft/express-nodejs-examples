// Ejecutar antes npm -g install streamline
if (!require('streamline/module')(module)) return;

var http = require("http");

function fibonacci(n, _) {
    if (n <= 1)
        return n;
    else {
        var res = 0;
        res = fibonacci(n - 1, _);
        process.nextTick(_);
        return res + fibonacci(n - 2, _);
    }
}

http.createServer(function (req, res, _) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url == "/fibo")
        res.end('Fibo: ' + fibonacci(33, _) + '\n');
    else
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
