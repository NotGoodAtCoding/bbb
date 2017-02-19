var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static('./bin/'));

app.listen(1337, function () {
    console.log('serving on 1337');
});

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
});

io.on('connection', function(socket) {
    socket.emit('hello', {'a': 'b'});
});

