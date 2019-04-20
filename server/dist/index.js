"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = __importStar(require("http"));
var ws = __importStar(require("ws"));
var RailDesktopServer = /** @class */ (function () {
    function RailDesktopServer(options) {
        this.app = express();
        this.http = http.createServer(this.app);
        this.http.listen(process.env.PORT, function () {
            console.log("Listening on port " + process.env.PORT);
        });
        this.ws = new ws.Server({ server: this.http });
    }
    RailDesktopServer.prototype.init = function () {
        this.ws.on('connection', function (socket) {
            socket.on('message', function (data) {
                var payload = JSON.parse(data);
                console.log(payload);
            });
            setInterval(function () {
                if (socket.readyState == 1) {
                    socket.send(JSON.stringify({
                        type: 'TIME',
                        data: {
                            time: new Date(),
                        },
                    }));
                    // console.log('> TIME');
                }
            }, 1000);
        });
    };
    return RailDesktopServer;
}());
var server = new RailDesktopServer({
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
});
server.init();
