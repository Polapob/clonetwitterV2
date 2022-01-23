import { IsDate, IsString } from 'class-validator';
export class userDTO {
  @IsString()
  name: string;
  password: string;
  description: string;
  @IsString()
  email: string;
  profileURL: string;
  dayBirth: Date;
  @IsString()
  userType: string;
}
