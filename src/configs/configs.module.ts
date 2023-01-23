import { Module } from '@nestjs/common';
import { ConfigModule as NestjsConfigModule } from '@nestjs/config';
import { configValidationSchema } from './validations';

@Module({
  imports: [
    NestjsConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
  ],
})
export class ConfigsModule {}
