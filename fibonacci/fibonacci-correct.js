var http = require("http")

function fibonacci(n, cbk) {
    if (n <= 1) cbk(n);
    else fibonacci(n - 1, function(_n_1) {
            process.nextTick(function() {
                fibonacci(n - 2, function( _n_2) {
                    cbk(_n_1 + _n_2)
                })
            })
        })
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url == "/fibo")
        fibonacci(33, function(fibres) {
            res.end('Fibo: ' + fibres + '\n');
        });
    else
        res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
