import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async createUser(newUser: IUser) {
    const newUserName = await this.userRepository.findOneUser(newUser.userName);
    if (newUserName) {
      throw new HttpException('Duplicate Username', HttpStatus.BAD_REQUEST);
    }
    return this.userRepository.createUser(newUser);
  }
  async findOneUser(userName: string): Promise<IUser> {
    return this.userRepository.findOneUser(userName);
  }
}
