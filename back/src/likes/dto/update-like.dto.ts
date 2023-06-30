import { PartialType } from '@nestjs/mapped-types';
import { CreateAdLikeDto } from './create-like.dto';

export class UpdateAdLikeDto extends PartialType(CreateAdLikeDto) {}
