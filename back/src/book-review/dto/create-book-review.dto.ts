import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookReviewDto {
  bookReviewId: number;

  @IsNotEmpty()
  title: string;
  
  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  content: string;
}
