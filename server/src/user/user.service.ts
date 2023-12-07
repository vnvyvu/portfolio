import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  update(email: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where: { email }, data: updateUserDto });
  }
}
