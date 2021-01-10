import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService} from '../users/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService ) {
  }
  public async getAuthenticatedUser(inputPassword: string, userName: string) {
    try {
      const user = await this.userService.findOneUser(userName);
      await this.verifyPassword(inputPassword, user.password)
      return user;
    } catch (err) {
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST)
    }
  }

  private async verifyPassword(inputPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(inputPassword, hashedPassword)
    if (!isPasswordMatching){
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST)
    }
  }
}
