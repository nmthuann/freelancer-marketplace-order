import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { PaymentMethodEntity } from "./payment-method.entity";

@Entity({ name: 'Transactions' })
export class TransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    transaction_id: number;

    // chỉ cho phép thanh toán một lần
    @OneToOne(() => OrderEntity, (order) => order.transaction) 
    @JoinColumn({ name: 'order_id' }) // fix here
    order: OrderEntity;

    @Column({nullable: false})
    buyer_id: string; // người thực hiện giao dịch


    @Column({nullable: false})
    amount: number;

    //FK
    // payment_method
    @ManyToOne(
        () => PaymentMethodEntity, 
        (payment_method) => payment_method.transactions, 
        { lazy: true })
    @JoinColumn({ name: 'payment_method_id' })
    payment_method: PaymentMethodEntity;


    @Column()
    description: string; // mô tả

    @Column({nullable: false})
    status: string; 
}