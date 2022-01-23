/* eslint-disable @typescript-eslint/no-var-requires */
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
import { userDTO } from './user.dto';
const ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

@Injectable()
export class UserService {
  constructor(@InjectModel(`User`) private readonly userModel: Model<User>) {}

  async getUserByEmail(email: string, throwException: boolean) {
    const user = await this.userModel.findOne({ email: email });
    if (!user && throwException) {
      throw new HttpException('user not found please register', 401);
    } else if (user) {
      return user;
    } else {
      return undefined;
    }
  }
  async getUser(id: string) {
    //console.log(ObjectId.isValid(id));
    if (ObjectId.isValid(id)) {
      const user = await this.userModel.findById(id);

      console.log(user);
      if (!user) {
        console.log('Dont have data in database!');
        console.log(1);
        throw new HttpException(`user not Found`, 404);
      } else {
        return user;
      }
      // Yes, it's a valid ObjectId, proceed with `findById` call.
    } else {
      throw new HttpException(`id is invalid type!`, 404);
    }
  }
  async createNewUser(userData: userDTO) {
    const hasSignUser = await this.userModel.findOne({ email: userData.email });
    /* const emailRegExChecker = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';
    if (!userData.email.match(emailRegExChecker)) {
      console.log(userData.email);
      throw new HttpException(
        'You have register with the mistake email domain.!',
        401,
      );
    } */
    if (hasSignUser) {
      throw new HttpException(
        'the user has already register please login!',
        409,
      );
    }

    const createAt = new Date();
    const updateAt = createAt;
    const {
      name,
      description,
      dayBirth,
      email,
      userType,
      profileURL,
      password,
    } = userData;

    if (userType === 'googleOAuth') {
      const newUser = new this.userModel({
        name,
        description,
        dayBirth,
        email,
        createAt,
        updateAt,
        profileURL,
        userType,
      });
      const user = await newUser.save();
      console.log(user);
      return user;
    } else if (userType === 'default') {
      if (!password) {
        throw new HttpException("User doesn't input a password", 401);
      } else {
        const salt = await bcrypt.genSaltSync(
          parseInt(process.env.saltOrRounds),
        );

        const hashPassword = await bcrypt.hashSync(password, salt);
        const newUser = new this.userModel({
          name,
          description,
          dayBirth,
          email,
          createAt,
          updateAt,
          profileURL,
          password: hashPassword,
          userType: userType,
        });
        const user = await newUser.save();
        delete user.password;
        return user;
      }
    }
  }
}
