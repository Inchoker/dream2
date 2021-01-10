import { ApiModelProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiModelProperty()
  password: string;
  @ApiModelProperty()
  userName: string;
}
