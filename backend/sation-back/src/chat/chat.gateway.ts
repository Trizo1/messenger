import { Body } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'


@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  listen(@MessageBody() message: string){
    this.server.sockets.emit('message', message);
  }

}