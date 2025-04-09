import { Module } from '@nestjs/common';
import { GridGeneratorService } from './grid-generator.service';
import { GridGeneratorController } from './grid-generator.controller';

@Module({
  controllers: [GridGeneratorController],
  providers: [GridGeneratorService],
})
export class GridGeneratorModule {}
