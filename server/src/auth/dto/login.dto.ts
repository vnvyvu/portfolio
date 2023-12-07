import { User } from '@prisma/client';

export class LoginGoogleResponse implements Partial<User> {
  email: string;
  name: string;

  constructor(o: Partial<LoginGoogleResponse>) {
    Object.assign(this, o);
  }
}
