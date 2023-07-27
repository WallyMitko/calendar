import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { Calendar } from "./calendar.entity"
import { TodoEntry } from "./todo.entity"

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column({
		unique: true
	})
	username: string

	@Column()
	password: string

	@OneToMany(() => Calendar, (calendar) => calendar.user)
	calendars: Calendar[]

	@OneToMany(() => TodoEntry, (entry) => entry.user)
	todoEntries: TodoEntry[]
}