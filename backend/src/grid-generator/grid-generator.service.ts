import { Injectable } from '@nestjs/common';
import { CreateGridGeneratorDto } from './dto/create-grid-generator.dto';
import { UpdateGridGeneratorDto } from './dto/update-grid-generator.dto';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class GridGeneratorService {
    private grid: string[][] = [];
    private biasChar: string = '';

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
        const biasPositions = new Set<number>();
        const biasCells = Math.floor(100 * 0.2); // 20% of the grid

        while (biasPositions.size < biasCells) {
            biasPositions.add(Math.floor(Math.random() * 100));
        }

        for (let i = 0; i < 10; i++) {
            newGrid[i] = [];
            for (let j = 0; j < 10; j++) {
                const linearPos = i * 10 + j;
                newGrid[i][j] =
                    biasPositions.has(linearPos) && this.biasChar
                        ? this.biasChar
                        : this.getRandomChar();
            }
        }
        this.grid = newGrid;
        console.log('Grid generated:', this.grid);
        return this.grid;
    }

    private getRandomChar() {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    setBiasChar(biasChar: string) {
        this.biasChar = biasChar;
    }

    calculateCode(grid: string[][]): string {
        const now = new Date();
        const seconds = now.getSeconds();
        const secStr = seconds.toString().padStart(2, '0');
        const [digit1, digit2] = secStr.split('').map(Number);

        const [x1, y1] = [digit1 % 10, digit2 % 10];
        const [x2, y2] = [digit2 % 10, digit1 % 10];

        const char1 = grid[x1]?.[y1] || 'a';
        const char2 = grid[x2]?.[y2] || 'a';

        const count1 = this.countOccurrences(char1);
        const count2 = this.countOccurrences(char2);

        return `${this.normalizeCount(count1)}${this.normalizeCount(count2)}`;
    }

    private countOccurrences(char: string): number {
        let count = 0;
        this.grid.forEach((row) => {
            row.forEach((cell) => {
                if (cell === char) count++;
            });
        });
        return count;
    }

    private normalizeCount(count: number): number {
        while (count > 9) {
            count = Math.floor(count / 2);
        }
        return count;
    }

    @Interval(2000)
    handleGridRefresh() {
        this.generateGrid();
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
