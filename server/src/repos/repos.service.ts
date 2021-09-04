import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ReposService {
  constructor(private httpService: HttpService) {}

  async findAll(username: string): Promise<Error | any> {
    try {
      const response = await this.httpService
        .get(`https://api.github.com/users/${username}/repos`)
        .toPromise();
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
