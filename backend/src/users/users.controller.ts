import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userDto: UsersDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll(): Promise<User[] | null> {
    return this.usersService.getAllUsers();
  }

  @Delete()
  deleteUser(@Body() id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }
}
