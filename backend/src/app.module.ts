import { Module } from '@nestjs/common';
import { GridGeneratorModule } from './grid-generator/grid-generator.module';

@Module({
    imports: [GridGeneratorModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
