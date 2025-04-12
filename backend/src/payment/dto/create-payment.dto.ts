import {
    IsArray,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

export class CreatePaymentDto {
    @IsString()
    @IsNotEmpty()
    name: string; // Name of the payment

    @IsString()
    @IsNotEmpty()
    code: string; // Code associated with the payment

    @IsNumber()
    @IsNotEmpty()
    amount: number; // Amount to be paid

    @IsArray()
    @IsNotEmpty()
    gridSnapshot: string[][]; // Snapshot of the grid at the time of payment
    // Add any other properties you need for your payment creation
}
