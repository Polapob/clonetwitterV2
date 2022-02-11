import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { accessToken, refreshToken } = req.cookies;

    if (accessToken && refreshToken) {
      try {
        const decodedAccesstoken = jwt.verify(
          accessToken,
          process.env.JWT_SECRET,
        );
        const decodedRefreshtoken = jwt.verify(
          refreshToken,
          process.env.JWT_SECRET,
        );

        req.user = decodedAccesstoken;
        next();
      } catch {
        return new HttpException('Invalid token', 401);
      }
      //const decodedAccesstoken
    } else {
      return new HttpException('Invalid token', 401);
    }
    // const {acc}
    //  console.log(req.cookies);
    //  console.log('Request...');
  }
}
