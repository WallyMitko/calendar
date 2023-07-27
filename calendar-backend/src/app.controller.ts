import { Controller, Get, Param, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { CalendarEvent, sampleEvents } from './types';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	
}
