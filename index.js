'use strict'

var app = require('./app');

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("app listening on port: " + port);
});

console.log('conexion establecida');