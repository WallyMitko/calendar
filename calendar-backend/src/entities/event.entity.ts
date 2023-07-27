import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { Calendar } from "./calendar.entity"

@Entity()
export class CalendarEvent {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	name: string

	@Column({
		nullable: true
	})
	description: string

	@Column({
		type: "timestamp"
	})
	date: Date

	@ManyToOne(() => Calendar, (calendar) => calendar.events)
	calendar: Calendar
}