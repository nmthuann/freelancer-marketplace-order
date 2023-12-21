import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

/**
 * 1. Số lượng Record sẽ phụ thuộc vào số Revision 
 * được quy định trên Package do Seller ghi nhận
 * 2. Đến khi Revision đã đủ thì ràng buộc trên code 
 * => không hiển thị button revision nữa 
 */
@Entity({ name: 'Revisions' })
export class RevisionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    revision_id: number

    @Column({nullable: false})
    revision_content: string;

    // FK Order_id
    @ManyToOne(
        () => OrderEntity, 
        (order) => order.revisions, {
        eager: true,
    }) 
    @JoinColumn({ name: 'order_id' })
    order: OrderEntity;
    // FK Seller_id
    // Fk Buyer_id
}