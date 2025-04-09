import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { GridGeneratorService } from './grid-generator.service';
import { CreateGridGeneratorDto } from './dto/create-grid-generator.dto';
import { UpdateGridGeneratorDto } from './dto/update-grid-generator.dto';

@Controller('grid-generator')
export class GridGeneratorController {
    constructor(private readonly gridGeneratorService: GridGeneratorService) {}

    @Post()
    create(@Body() createGridGeneratorDto: CreateGridGeneratorDto) {
        return this.gridGeneratorService.create(createGridGeneratorDto);
    }

    @Get()
    getGrid() {
        return { grid: this.gridGeneratorService.getCurrentGrid() };
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gridGeneratorService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateGridGeneratorDto: UpdateGridGeneratorDto,
    ) {
        return this.gridGeneratorService.update(+id, updateGridGeneratorDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.gridGeneratorService.remove(+id);
    }
}
