import { Injectable } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tweet } from './tweet.model';
import { tweetDTO } from './tweet.dto';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class TweetService {
  constructor(
    @InjectModel('Tweet') private readonly tweetModel: Model<Tweet>, //private readonly JwtService: JwtService,
  ) {}

  async createTweet(tweetDTO: tweetDTO, request: Request) {
    const { description } = tweetDTO;
    const user: any = request.user;
    const createDate = new Date();
    const tweetID: Schema.Types.ObjectId[] = [];
    const tweetData: Tweet = {
      description,
      userId: user.id,
      createAt: createDate,
      updateAt: createDate,
      tweetIDs: tweetID,
    };
    const createdTweet = new this.tweetModel(tweetData);
    return await createdTweet.save();
  }
}
