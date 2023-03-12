import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './mysql/mysql.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlService } from './mysql/mysql.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        SERVER_PORT: Joi.number().default(3000).required(),
        NODE_ENV: Joi.string().required(),
        /* MYSQL */
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_USERNAME: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DATABASE: Joi.string().required(),
        /* MongoDB */
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [MysqlModule],
      useClass: MysqlService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
