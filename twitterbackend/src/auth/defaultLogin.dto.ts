import { IsNotEmpty, IsString } from 'class-validator';
export class defaultLoginDTO {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
