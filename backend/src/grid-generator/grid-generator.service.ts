import { Injectable } from '@nestjs/common';
import { CreateGridGeneratorDto } from './dto/create-grid-generator.dto';
import { UpdateGridGeneratorDto } from './dto/update-grid-generator.dto';

@Injectable()
export class GridGeneratorService {
    private grid: string[][] = [];

    constructor() {
        //this.generateGrid();
    }

    create(createGridGeneratorDto: CreateGridGeneratorDto) {
        return 'This action adds a new gridGenerator';
    }

    getCurrentGrid(): string[][] {
        return this.generateGrid();
    }

    generateGrid() {
        const newGrid: string[][] = [];
        for (let i = 0; i < 10; i++) {
            newGrid[i] = [];
            for (let j = 0; j < 10; j++) {
                const linearPos = i * 10 + j;
                newGrid[i][j] = this.getRandomChar();
            }
        }
        this.grid = newGrid;
        console.log('Grid generated:', this.grid);
        return this.grid;
    }

    private getRandomChar() {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    findOne(id: number) {
        return `This action returns a #${id} gridGenerator`;
    }

    update(id: number, _updateGridGeneratorDto: UpdateGridGeneratorDto) {
        return `This action updates a #${id} gridGenerator`;
    }

    remove(id: number) {
        return `This action removes a #${id} gridGenerator`;
    }
}
