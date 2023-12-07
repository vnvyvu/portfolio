import {
  Controller,
  Get,
  InternalServerErrorException,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginGoogleResponse } from './dto/login.dto';
import { GoogleGuard } from './google.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GoogleGuard)
  @Get('google')
  google() {}

  @ApiOkResponse({ type: LoginGoogleResponse })
  @UseGuards(GoogleGuard)
  @Get('google/redirect')
  async googleRedirect(@Req() req: Request) {
    if (!req.user) throw new InternalServerErrorException();
    return req.user;
  }
}
