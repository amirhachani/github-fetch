import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposModule } from './repos/repos.module';

@Module({
  imports: [HttpModule, ReposModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
