import { PartialType } from '@nestjs/mapped-types';
import { CreateAdPlaceDto } from './create-ad_place.dto';

export class UpdateAdPlaceDto extends PartialType(CreateAdPlaceDto) {}
