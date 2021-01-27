import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { GetUserDto } from './authentication.dto';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}
  @Post()
  @ApiUseTags('Authentication')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'successfully get authenticated user',
  })
  getUser(@Body() getUser: GetUserDto) {
    return this.authenticationService.getAuthenticatedUser(
      getUser.password,
      getUser.userName,
    );
  }
}
