import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('freetext')
  getFreeText(@Query('freetext') freetext: string): string {
    return this.appService.getFreeText(freetext);
  }
}
