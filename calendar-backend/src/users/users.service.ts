import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService { 
	constructor(@InjectRepository(User) private userRepository:Repository<User>) {}

	getUser(id: string): Promise<User[]> {
		return this.userRepository.find({
			where: {
				id: id
			}
		})
	}

}
