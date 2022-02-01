import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ValidationPipe } from 'src/user/validation.pipe';
import { registerDTO } from './register.dto';
import { Response } from 'express';
import RegisterService from './register.service';

@Controller('register')
export default class RegisterController {
  constructor(private readonly RegisterService: RegisterService) {}
  @Post('/newuser')
  async registerUser(
    @Body(new ValidationPipe()) registerDTO: registerDTO,
    @Res() response: Response,
  ) {
    const { user, refreshToken, accessToken } =
      await this.RegisterService.addNewUser(registerDTO);

    response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 2.592e9,
    });
    response.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 8.64e7,
    });
    //return user;
    response.status(200).send(user);
    //response.status(200).send('not finished');
    return 'not finished!';
  }
}
