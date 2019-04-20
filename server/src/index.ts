import express = require('express');
import * as http from 'http';
import * as ws from 'ws';

import IServerOptions from './interfaces/IServerOptions';
import IPayload from './interfaces/IPayload';

class RailDesktopServer {
	private app: any;
	private http: http.Server;
	private ws: any;
	
	constructor(options: IServerOptions) {
		this.app = express();
		this.http = http.createServer(this.app);
		
		this.http.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
		
		this.ws = new ws.Server({ server: this.http });
	}
	
	public init(): void {
		this.ws.on('connection', (socket: any) => {
			socket.on('message', (data: string) => {
				const payload: IPayload = JSON.parse(data);
				console.log(payload);
			});
			
			setInterval(() => {
				if (socket.readyState == 1) {
					socket.send(JSON.stringify({
						type: 'TIME',
						data: {
							time: new Date(),
						},
					}));
				}
			}, 1000);
		});
	}
}

const server = new RailDesktopServer({
	port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
});

server.init();