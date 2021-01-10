import { IUser } from './user.interface';
import { ApiModelProperty } from '@nestjs/swagger';
import { Document} from 'mongoose';
export class UserCreateResponse {
  @ApiModelProperty()
  message: string
  @ApiModelProperty()
  createdUser: string;
}
export class UserCreateDto implements IUser{
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  password: string;
  @ApiModelProperty()
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
