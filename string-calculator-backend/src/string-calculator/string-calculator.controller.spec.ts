import { Test, TestingModule } from '@nestjs/testing';
import { StringCalculatorController } from './string-calculator.controller';

describe('StringCalculatorController', () => {
  let controller: StringCalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StringCalculatorController],
    }).compile();

    controller = module.get<StringCalculatorController>(StringCalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
