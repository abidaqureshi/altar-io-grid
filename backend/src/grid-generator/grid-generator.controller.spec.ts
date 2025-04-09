import { Test, TestingModule } from '@nestjs/testing';
import { GridGeneratorController } from './grid-generator.controller';
import { GridGeneratorService } from './grid-generator.service';

describe('GridGeneratorController', () => {
  let controller: GridGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GridGeneratorController],
      providers: [GridGeneratorService],
    }).compile();

    controller = module.get<GridGeneratorController>(GridGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
