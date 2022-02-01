import { HttpException, Injectable } from '@nestjs/common';
import { registerDTO } from './register.dto';
import { UserService } from 'src/user/user.service';
import { userDTO } from 'src/user/user.dto';
import { TokenPayload } from 'src/auth/interfaces/TokenPayload.interface';
import { JwtService } from '@nestjs/jwt';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

@Injectable()
export default class RegisterService {
  constructor(
    private readonly UserService: UserService,
    private readonly JWTService: JwtService,
  ) {}
  async addNewUser(
    registerDTO: registerDTO,
  ): Promise<{ user: userDTO; accessToken: string; refreshToken: string }> {
    const { username, dayBirth, email, password } = registerDTO;
    const passwordRegex =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,32}$/;
    const user = await this.UserService.getUserByEmail(email, false);

    if (!!user) {
      throw new HttpException('User has already signup!', 400);
    }

    if (!password.match(passwordRegex)) {
      // throw new HttpException('Password not strong enough', 400);

      throw new HttpException('Password not strong enough', 400);
      // response.status(400).send('Password not strong enough');
    }
    // const salt = bcrypt.genSaltSync(parseInt(process.env.saltOrRounds));
    // const hashPassword = bcrypt.hashSync(password, salt);
    const registerData: userDTO = {
      name: username,
      dayBirth,
      email,
      password: password,
      description: '',
      profileURL: '',
      userType: 'default',
    };
    console.log(registerData);
    const addUser = await this.UserService.createNewUser(registerData);
    console.log(addUser);
    const payload: TokenPayload = { id: addUser.id, email: addUser.email };

    const refreshToken = this.JWTService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1m',
    });

    const accessToken = this.JWTService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });

    delete addUser.password;

    return { user: addUser, accessToken, refreshToken };
    // console.log(hashPassword);
  }
}
