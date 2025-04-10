import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GridGeneratorService } from '../grid-generator.service';
import { Interval } from '@nestjs/schedule';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class GridGateway implements OnGatewayInit {
    @WebSocketServer()
    server: Server;

    constructor(private readonly gridService: GridGeneratorService) {}

    afterInit() {
        console.log('WebSocket Gateway initialized');
    }

    @Interval(2000)
    broadcastGridUpdate() {
        const grid = this.gridService.getCurrentGrid();
        const code = this.gridService.calculateCode(grid);
        this.server.emit('GRID_UPDATE', { grid, code_secret: code });
    }
}
