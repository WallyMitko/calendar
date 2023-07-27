import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import {TypeOrmModule} from "@nestjs/typeorm"
import { CalendarEvent } from 'src/entities/event.entity';

@Module({
	imports: [TypeOrmModule.forFeature([CalendarEvent])],
	controllers: [EventsController],
	providers: [EventsService]
})
export class EventsModule { }
