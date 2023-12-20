import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Revisions' })
export class RevisionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    revision_id: number

    @Column({nullable: false})
    revision_content: string;

    // FK Order_id
    // FK Seller_id
    // Fk Buyer_id
}