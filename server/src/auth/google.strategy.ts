import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import {
  Profile,
  Strategy,
  StrategyOptionsWithRequest,
  VerifyCallback,
} from 'passport-google-oauth20';
import { ParsedQs } from 'qs';
import GoogleClientSecret from '../../google_client_secret.json';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super(<StrategyOptionsWithRequest>{
      clientID: GoogleClientSecret.web.client_id,
      clientSecret: GoogleClientSecret.web.client_secret,
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const user = await this.authService.getOrCreateGoogleUser(profile);
    done(null, user);
  }
}
