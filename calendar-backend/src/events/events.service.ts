import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import {Repository, Between} from "typeorm"
import { CalendarEvent } from 'src/entities/event.entity';

@Injectable()
export class EventsService {
	constructor (
		@InjectRepository(CalendarEvent)
		private eventsRepository: Repository<CalendarEvent>
	){}

	getEvents(month: number, year: number): Promise<CalendarEvent[]> {
		let monthStart = new Date(year, month, 1);
		let monthEnd = new Date(year, month, this.daysInMonth(monthStart), 23, 59)
		return this.eventsRepository.find({
			where: {
				date: Between(monthStart, monthEnd)
			}
		})
	}

	daysInMonth(date: Date) {
		let months31 = [0, 2, 4, 6, 7, 9, 11]
		let month = date.getMonth();
		if (months31.includes(month))
			return 31;
		else if (month !== 1)
			return 30;
		return this.isLeapYear(date.getFullYear()) ? 29 : 28;
	}
	
	isLeapYear(year: number) {
		return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
	}
}
