import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { userDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  getUserData(@Param('id') id: string) {
    console.log(id);
    return this.userService.getUser(id);
  }

  @Post('createUser')
  createUserData(
    @Body(new ValidationPipe())
    userData: userDTO,
  ) {
    //const { name, description, dayBirth, email } = userData;
    return this.userService.createNewUser(userData);
  }
}
