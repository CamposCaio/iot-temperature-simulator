import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';

@Module({ imports: [ConfigModule.forRoot({ isGlobal: true }), MessageModule] })
export class AppModule {}
