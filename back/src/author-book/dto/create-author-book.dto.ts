import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAuthorBookDto {
  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @IsNotEmpty()
  @IsNumber()
  bookId: number;
}
