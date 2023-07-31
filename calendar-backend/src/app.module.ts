import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Calendar } from './entities/calendar.entity';
import { CalendarEvent } from './entities/event.entity';
import { TodoEntry } from './entities/todo.entity';
import { EventsModule } from './events/events.module';
import { EventsService } from './events/events.service';
import { EventsController } from './events/events.controller';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.db_host,
			port: parseInt(process.env.db_port),
			username: process.env.db_user,
			password: process.env.db_pass,
			database: process.env.db_database,
			entities: [User, Calendar, CalendarEvent, TodoEntry],
			synchronize: true
		}),
		EventsModule,
		UsersModule
	],
	controllers: [AppController, EventsController],
	providers: [AppService, EventsService],
})
export class AppModule { }
