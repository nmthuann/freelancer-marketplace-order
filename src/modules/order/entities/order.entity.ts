import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Orders' })
export class OrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    order_id: number;

    @Column({nullable: false})
    post_id: string; // post document

    @Column({nullable: false})
    package_id: string; // post document

    @Column({nullable: false}) 
    status: string

    @Column() 
    // ngày nhận hàng dự kiến + 1 tính từ khi status = confirm
    delivery_day: Date;

    @Column({nullable: false})
    buyer_id: string; // post document

    @Column({nullable: false})
    seller_id: string; // post document

}