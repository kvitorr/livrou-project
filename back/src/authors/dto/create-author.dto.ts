import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  books: number[];
}
