import {
    OnGatewayInit,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PaymentService } from '../payment.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@WebSocketGateway({
    namespace: '/payments',
    cors: {
        origin: '*',
    },
})
@Injectable()
export class PaymentGateway implements OnGatewayInit {
    @WebSocketServer()
    server: Server;

    constructor(
        @Inject(forwardRef(() => PaymentService))
        private readonly paymentService: PaymentService,
    ) {}

    afterInit() {
        console.log('Payment Gateway initialized');
    }

    broadcastPaymentUpdate() {
        this.paymentService.findAll().then((payments) => {
            this.server.emit('payment-list-updated', payments);
        });
    }
}
