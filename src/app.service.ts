import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): any {
    return {
      succes: 200,
      data: 'Hello, NestJS!'
    };
  }
}
