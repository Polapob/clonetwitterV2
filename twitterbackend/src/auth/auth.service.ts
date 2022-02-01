/* eslint-disable @typescript-eslint/no-var-requires */
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { TokenPayload } from './interfaces/TokenPayload.interface';
import { RequestOptions } from 'urllib';
import e from 'express';
import { userDTO } from 'src/user/user.dto';
import { googleLogin } from './interfaces/googleLogin.interface';

const bcrypt = require('bcryptjs');
const urllib = require('urllib').create();

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly JwtService: JwtService,
  ) {}

  async googleOAuthLogin(loginObject: {
    code: string;
    scope: string;
  }): Promise<{ user: User; refreshToken: string; accessToken: string }> {
    let user: User;
    const { code } = loginObject;
    const options: RequestOptions = {
      method: 'POST',
      data: {
        code: code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
      },
    };
    const tokenResponse = await urllib.request(
      'https://oauth2.googleapis.com/token',
      options,
    );

    const dataOptions: RequestOptions = {
      method: 'GET',
    };
    const tokenData = JSON.parse(tokenResponse.data);
    const dataResponse = await urllib.request(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenData.access_token}`,
      dataOptions,
    );

    const googleUserData = JSON.parse(dataResponse.data);
    const { email } = googleUserData;
    const checkUser: User = await this.userService.getUserByEmail(email, false);

    // If not found you must create user in database at type googleOAuth and if found but user has already create a default account warning user to login with default account otherwise you can login.
    if (checkUser && checkUser.userType === 'googleOAuth') {
      user = checkUser;
      const payload: TokenPayload = { id: checkUser.id, email: email };
      const refresh_token = this.JwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1m',
      });
      const access_token = this.JwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
      });

      delete user.password;

      return {
        user: user,
        refreshToken: refresh_token,
        accessToken: access_token,
      };
    } else if (checkUser && checkUser.userType !== `googleOAuth`) {
      throw new HttpException('You must login with default Account!', 401);
    } else {
      // create user in database
      const userData = {
        email: email,
        userType: 'googleOAuth',
        name: 'Mr. OAuth',
      } as googleLogin;

      user = await this.userService.createNewUser(userData);

      const payload: TokenPayload = { id: user.id, email: user.email };

      const refresh_token = this.JwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1m',
      });
      const access_token = this.JwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
      });

      delete user.password;
      return {
        user: user,
        accessToken: access_token,
        refreshToken: refresh_token,
      };
    }
  }
  async defaultLogin(loginObject: {
    email: string;
    password: string;
  }): Promise<{ user: User; refreshToken: string; accessToken: string }> {
    let user: User;
    const { email, password } = loginObject;
    const compareUser: User = await this.userService.getUserByEmail(
      email,
      true,
    );
    if (compareUser) {
      const samePassword = await bcrypt.compareSync(
        password,
        compareUser.password,
      );
      if (samePassword) {
        user = compareUser;
        const payload: TokenPayload = { id: user.id, email: user.email };
        const refresh_token = this.JwtService.sign(payload, {
          secret: process.env.JWT_SECRET,
          expiresIn: '1m',
        });
        const access_token = this.JwtService.sign(payload, {
          secret: process.env.JWT_SECRET,
          expiresIn: '1d',
        });
        // console.log('refresh_token =', refresh_token);
        //  console.log('access_token =', access_token);
        delete user.password;
        return {
          user: user,
          refreshToken: refresh_token,
          accessToken: access_token,
        };
      } else {
        throw new HttpException(
          "Your password isn't match with your registered password!",
          401,
        );
      }
    }
  }
}
