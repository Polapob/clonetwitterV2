import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Session,
  ValidationPipe,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { defaultLoginDTO } from './defaultLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Get('google/callback/')
  async googleLoginCallBack(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { code, scope } = request.query;

    // console.log(request.query);
    const { user, refreshToken, accessToken } =
      await this.AuthService.googleOAuthLogin({
        code: code.toString(),
        scope: scope.toString(),
      });
    response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 2.592e9,
    });
    response.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 8.64e7,
    });

    response.status(200).send(user);
  }
  @Post('defaultLogin')
  async defaultLogin(
    @Body(new ValidationPipe()) defaultLoginDTO: defaultLoginDTO,
    @Res() response: Response,
  ) {
    const { user, refreshToken, accessToken } =
      await this.AuthService.defaultLogin(defaultLoginDTO);
    // console.log(user, refreshToken, accessToken);
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
  }
}
