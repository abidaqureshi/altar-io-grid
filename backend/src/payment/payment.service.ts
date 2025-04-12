import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentGateway } from './gateway/payment.gateway';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private paymentRepository: Repository<Payment>,
        @Inject(forwardRef(() => PaymentGateway))
        private readonly paymentGateway: PaymentGateway,
    ) {}

    async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const payment = this.paymentRepository.create(createPaymentDto);
        const savePayment = await this.paymentRepository.save(payment);
        this.paymentGateway.broadcastPaymentUpdate();
        return savePayment;
    }

    async findAll(): Promise<Payment[]> {
        return await this.paymentRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} payment`;
    }

    update(id: number, updatePaymentDto: UpdatePaymentDto) {
        return `This action updates a #${id} payment`;
    }

    remove(id: number) {
        return `This action removes a #${id} payment`;
    }
}
