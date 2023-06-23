import { PartialType } from '@nestjs/mapped-types';
import { CreateAdvertisementDTO } from './create-advertisement.dto';

export class UpdateAdvertisementDto extends PartialType(CreateAdvertisementDTO) {}
