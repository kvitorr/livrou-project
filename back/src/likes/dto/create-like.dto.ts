import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAdLikeDto {
  @IsNotEmpty()
  @IsNumber()
  adId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
