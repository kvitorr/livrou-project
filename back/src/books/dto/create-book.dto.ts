import { IsNotEmpty, IsString, ArrayNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  synopsis: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  edition_count: number;
  publish_date: Date;
  imageUrl: string;

  @ArrayNotEmpty()
  @IsString({ each: true })
  authorNames: string[]; // Array of author names
}


import { Author } from 'src/authors/entities/author.entity';

