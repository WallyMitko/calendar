import { Controller, Get, Header, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController { 
	constructor(private readonly usersService: UsersService) {}

	@Get("/user/:id")
	@Header("Access-Control-Allow-Origin", "*")
	async getUser(@Param() params: any): Promise<User[]> {
		let id: string = params.id;
		if (!id.match("/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i")) {
			throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
		}
		return this.usersService.getUser(id)
	}
}
