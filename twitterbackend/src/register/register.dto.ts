import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
export class registerDTO {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsDateString()
  @IsNotEmpty()
  dayBirth: Date;
}
