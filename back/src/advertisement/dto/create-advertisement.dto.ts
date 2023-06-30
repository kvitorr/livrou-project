import { IsNotEmpty, IsNumber, IsString, IsArray, ValidateNested, IsBooleanString  } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLocationDto } from 'src/location/dto/create-location.dto';

export class CreateAdvertisementDTO {
  @IsNotEmpty()
  @IsNumber()
  bookId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  conservationId: number;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  transactionTypeId: number;

  @IsNotEmpty()
  @IsBooleanString()
  removed: boolean;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLocationDto)
  locations: CreateLocationDto[];
}
