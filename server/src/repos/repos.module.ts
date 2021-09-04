import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ReposController } from './repos.controller';
import { ReposService } from './repos.service';


@Module({
  imports: [HttpModule],
  controllers: [ReposController],
  providers: [ReposService, HttpModule]
})
export class ReposModule {}
