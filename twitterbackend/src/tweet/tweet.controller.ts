import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ValidationPipe } from 'src/user/validation.pipe';
import { tweetDTO } from './tweet.dto';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly TweetService: TweetService) {}

  @Get('/:tweetId')
  async getTweet(@Param('tweetId') tweetId: string) {
    return { text: 'Hello world' };
  }

  @Post('/createTweet')
  async createTweet(
    @Body(new ValidationPipe()) tweetDTO: tweetDTO,
    @Req() request: Request,
  ) {
    const tweet = await this.TweetService.createTweet(tweetDTO, request);
    console.log(tweet);
    return { text: 'Post success!' };
  }
}
