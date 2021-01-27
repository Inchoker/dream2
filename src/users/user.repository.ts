import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.interface';
import * as bcrypt from 'bcrypt';
import { UserCreateDtoDocument } from './user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('user') private userModel: Model<UserCreateDtoDocument>,
  ) {}

  async createUser(newUser: IUser) {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user = await this.userModel.create(
      {
        userName: newUser.userName,
        password: hashedPassword,
        email: newUser.email,
      },
      (err) => {
        if (err) {
          throw new Error(`cannot create record with error: ${err}`);
        }
      },
    );
    return {
      message: 'succeeded',
      createdUser: newUser.userName,
    };
  }

  async findOneUser(userName: string): Promise<IUser> {
    return this.userModel.findOne({ userName });
  }
}
