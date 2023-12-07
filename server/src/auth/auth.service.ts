import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { Profile } from 'passport-google-oauth20';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async getOrCreateGoogleUser({
    displayName,
    emails,
  }: Pick<Profile, 'displayName' | 'emails'>) {
    const name = displayName;
    const email = emails[0].value;

    let user = await this.prisma.user.findFirst({ where: { email } });
    if (!user) {
      user = await this.prisma.user.create({ data: { email, name } });
    }

    return user;
  }

  async login(user: Pick<User, 'email' | 'name'>) {
    return {
      accessToken: this.jwtService.sign(
        {
          email: user.email,
          name: user.name,
        },
        {
          expiresIn: this.configService.get('JWT_EXPIRES_IN'),
        },
      ),
    };
  }
}
