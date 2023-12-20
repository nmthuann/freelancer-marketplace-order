import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'PaymentMethods' })
export class PaymentMethodEntity {
    @PrimaryGeneratedColumn()
    payment_method_id: number

    @Column({nullable: false})
    payment_method_name: string;

    @Column()
    description: string;
}