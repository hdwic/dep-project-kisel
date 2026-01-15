import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFreeText(freetext: string): string {
    return freetext;
  }
  getHello(): string {
    return 'Test Deployment';
  }
}
