import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class MysqlService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: this.configService.get('MYSQL_HOST'),
      port: +this.configService.get('MYSQL_PORT'),
      username: this.configService.get('MYSQL_USERNAME'),
      password: this.configService.get('MYSQL_PASSWORD'),
      database: this.configService.get('MYSQL_DATABASE'),
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV !== 'production',
      keepConnectionAlive: process.env.NODE_ENV !== 'production',
      charset: 'utf8mb4',
    };
  }
}
