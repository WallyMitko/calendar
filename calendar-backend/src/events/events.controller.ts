import { Controller, Get, Header, Param, HttpException, HttpStatus } from '@nestjs/common';
import { EventsService } from './events.service';
import { CalendarEvent } from 'src/entities/event.entity';

@Controller('events')
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	// Get the list of calendar events for a given month
	// Todo: Connect to a database instead of using a hard-coded list
	@Get("events/:year/:month")
	@Header("Access-Control-Allow-Origin", "*")
	async getEvents(@Param() params: any): Promise<CalendarEvent[]> {
		let month = parseInt(params.month);
		let year = parseInt(params.year);
		if (Number.isNaN(month) || Number.isNaN(year)) throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
		return this.eventsService.getEvents(month, year);
	}
}
