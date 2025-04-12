import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column()
    code: string;
    @Column('simple-json')
    gridSnapshot: string[][];

    @CreateDateColumn()
    createdAt: Date;
}
