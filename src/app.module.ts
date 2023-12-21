import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './modules/order/entities/order.entity';
import { TransactionEntity } from './modules/order/entities/transaction.entity';
import { RevisionEntity } from './modules/order/entities/revision.entity';
import { ReasonEntity } from './modules/order/entities/reason.entity';
import { PaymentMethodEntity } from './modules/order/entities/payment-method.entity';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type:'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password:  process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [
          OrderEntity,
          TransactionEntity,
          RevisionEntity,
          ReasonEntity,
          PaymentMethodEntity,
        ],
        synchronize: true, // fix: false -> migration
      }),
      // OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
