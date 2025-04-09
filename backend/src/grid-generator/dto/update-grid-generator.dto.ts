import { PartialType } from '@nestjs/mapped-types';
import { CreateGridGeneratorDto } from './create-grid-generator.dto';

export class UpdateGridGeneratorDto extends PartialType(CreateGridGeneratorDto) {}
