import { Module } from '@nestjs/common';
import { GridGeneratorService } from './grid-generator.service';
import { GridGeneratorController } from './grid-generator.controller';
import { GridGateway } from './gateway/grid.gateway';

@Module({
    controllers: [GridGeneratorController],
    providers: [GridGeneratorService, GridGateway],
})
export class GridGeneratorModule {}
