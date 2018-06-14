var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function () {
    let port = app.get('port');
    console.log(`Express	Server	escutando	na	porta ${port}`);
});
