import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [ConfigModule, ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
