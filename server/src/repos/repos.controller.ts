import { Controller,Get ,Param } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
    constructor(
        private reposService: ReposService
    ){}

    @Get(':username')
    async findAll(@Param() param) {
     return await this.reposService.findAll(param.username)
   }

}
