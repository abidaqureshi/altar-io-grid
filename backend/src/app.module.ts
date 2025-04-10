import { Module } from '@nestjs/common';
import { GridGeneratorModule } from './grid-generator/grid-generator.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports: [ScheduleModule.forRoot(), GridGeneratorModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
