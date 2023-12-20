import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Transactions' })
export class TransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    transaction_id: number;

    // @Column({nullable: false})
    // order: string; //  FK

    @Column({nullable: false})
    buyer_id: string; // người thực hiện giao dịch


    @Column({nullable: false})
    amount: number; // người thực hiện giao dịch

    //FK
    // payment_method

    @Column()
    description: string; // mô tả

    @Column({nullable: false})
    status: string; 
}