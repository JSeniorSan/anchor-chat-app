import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}
  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}
