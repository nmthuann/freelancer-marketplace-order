import { 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    UpdateDateColumn 
} from "typeorm";

@Entity()
export abstract class BaseEntity{

@CreateDateColumn({
  name: 'created_at',
  default: () => 'CURRENT_TIMESTAMP(6)',
})
createdAt: Date;

@UpdateDateColumn({
  name: 'updated_at',
  default: () => 'CURRENT_TIMESTAMP(6)',
  onUpdate: 'CURRENT_TIMESTAMP(6)',
})
updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
    })
    deletedAt: Date;
}