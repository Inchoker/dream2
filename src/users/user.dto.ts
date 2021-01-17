import { IUser } from './user.interface';
import { ApiModelProperty } from '@nestjs/swagger';
import { Document} from 'mongoose';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class UserCreateResponse {
  @ApiModelProperty()
  message: string
  @ApiModelProperty()
  createdUser: string;
}
export class UserCreateDto implements IUser{
  @IsEmail()
  @IsNotEmpty()
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  @MinLength(6,{message:'password is too short'})
  password: string;
  @ApiModelProperty()
  @IsNotEmpty()
  userName: string;
}
export class UserCreateDtoDocument extends Document {
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  password: string;
  @ApiModelProperty()
  userName: string;
}
