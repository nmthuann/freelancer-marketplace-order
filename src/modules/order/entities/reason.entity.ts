import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity({ name: 'Reasons' })
export class ReasonEntity {
    @PrimaryGeneratedColumn()
    reason_id: number

    @Column({nullable: false})
    reason: string;

    // FK Order_id
    @OneToOne(() => OrderEntity, (order) => order.reason) // specify inverse side as a second parameter
    order: OrderEntity;
}