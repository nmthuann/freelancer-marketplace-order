import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TransactionEntity } from "./transaction.entity";

@Entity({ name: 'PaymentMethods' })
export class PaymentMethodEntity {
    @PrimaryGeneratedColumn()
    payment_method_id: number

    @Column({nullable: false})
    payment_method_name: string;

    @Column()
    description: string;

    @OneToMany(
        () => TransactionEntity, 
        (transaction) => transaction.payment_method
    )
    transactions: TransactionEntity[];
}