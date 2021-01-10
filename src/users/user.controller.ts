import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags, ApiImplicitBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserCreateDto, UserCreateResponse } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @ApiUseTags('User')
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created',
    type: UserCreateResponse,
  })
  @ApiOperation({ operationId: 'createNewUser', title: 'Create New User' })
  createUser(@Body() newUser: UserCreateDto): Promise<UserCreateResponse> {
    return this.userService.createUser(newUser);
  }
}
