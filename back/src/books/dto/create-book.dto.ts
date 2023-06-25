import { IsNotEmpty, IsString, ArrayNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  synopsis: string;

  @IsNotEmpty()
  @IsString()
  title: string;


  @ArrayNotEmpty()
  @IsString({ each: true })
  authorNames: string[]; // Array of author names
}
