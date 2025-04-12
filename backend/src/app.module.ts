import { Module } from '@nestjs/common';
import { GridGeneratorModule } from './grid-generator/grid-generator.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'payments.db',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
        }),
        ScheduleModule.forRoot(),
        GridGeneratorModule,
        PaymentModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
