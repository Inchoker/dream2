import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserCreateDto, UserCreateResponse } from './user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @ApiUseTags('user')
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created',
    type: UserCreateResponse,
  })
  @ApiOperation({ operationId: 'createNewUser', title: 'Create New User' })
  async createUser(@Body() newUser: UserCreateDto)
    : Promise<UserCreateResponse> {
    return this.userService.createUser(newUser);
  }
}
