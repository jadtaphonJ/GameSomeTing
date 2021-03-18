const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var position = {
    x: 200,
    y: 200
}

Socketio.on("connection", socket => {
    socket.emit("position", position);
});

Http.listen(5001, () => {
    console.log("Listening at : 5001...");
})