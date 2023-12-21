import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReasonEntity } from "./reason.entity";
import { RevisionEntity } from "./revision.entity";
import { TransactionEntity } from "./transaction.entity";

@Entity({ name: 'Orders' })
export class OrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    order_id: number;


    @Column({nullable: false}) // ghi nhận bằng ENUM 
    status: string; 

    @Column({nullable: false}) 
    // ngày nhận hàng dự kiến + 1 
    // tính từ khi status = confirm
    delivery_day: Date;

    @OneToOne(() => ReasonEntity, (reason) => reason.order) // , { cascade: true }
    @JoinColumn({ name: 'reason_id' })
    reason: ReasonEntity;

    @OneToMany(
        () => RevisionEntity,
        (revision) => revision.order,
    )
    revisions: RevisionEntity[];


    @OneToOne(() => TransactionEntity, (transaction) => transaction.order) // specify inverse side as a second parameter
    transaction: TransactionEntity;

    //  Các khóa ở Service khác
    @Column({nullable: false})
    post_id: string; // post document
    @Column({nullable: false})
    package_id: string; // post document

    @Column({nullable: false})
    buyer_id: string; // user document
    @Column({nullable: false})
    seller_id: string; // user document

}