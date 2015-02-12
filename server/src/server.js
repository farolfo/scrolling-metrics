var ws = require("nodejs-websocket");

// Initiate server for incomming requests
var server = ws.createServer(function (conn) {
    console.log("New connection " + conn);
    conn.on("text", function (str) {
        console.log("Received "+str)
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
}).listen(8001);
