import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { User } from "./user.entity"

@Entity()
export class TodoEntry {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	text: string

	@Column({
		default: false
	})
	isCompleted: boolean

	@ManyToOne(() => User, (user) => user.todoEntries)
	user: User
}