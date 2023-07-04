import { IsNotEmpty, IsNumber, IsString, IsArray, ValidateNested, IsBooleanString  } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLocationDto } from 'src/location/dto/create-location.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdvertisementDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  bookId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  conservationId: number;

  @ApiProperty()
  @IsNumber()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  transactionTypeId: number;

  @IsNotEmpty()
  @IsBooleanString()
  removed: boolean;
  
  postingDate: Date;

  completionDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLocationDto)
  locations: CreateLocationDto[];
}
