import { IsNotEmpty, IsString } from 'class-validator';

export class tweetDTO {
  @IsString()
  @IsNotEmpty()
  description: string;
}
