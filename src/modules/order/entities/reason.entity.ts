import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Reasons' })
export class ReasonEntity {
    @PrimaryGeneratedColumn()
    reason_id: number

    @Column({nullable: false})
    reason: string;

    // FK Order_id
}