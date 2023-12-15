import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(data: UsersDto): Promise<User> {
    const create = await this.prisma.user.create({
      data,
    });
    return create;
  }
  async deleteUser(id: string): Promise<User> {
    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });
    return deletedUser;
  }
}
