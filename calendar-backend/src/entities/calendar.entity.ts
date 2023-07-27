import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm"
import { User } from "./user.entity"
import { CalendarEvent } from "./event.entity"

@Entity()
export class Calendar {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	name: string

	@Column({
		type: "smallint"
	})
	colorRed: number

	@Column({
		type: "smallint"
	})
	colorGreen: number

	@Column({
		type: "smallint"
	})
	colorBlue: number

	@Column({
		default: false
	})
	isPublic: boolean
	
	@ManyToOne(() => User, (user) => user.calendars)
	user: User

	@OneToMany(() => CalendarEvent, (event) => event.calendar)
	events: CalendarEvent[]
}