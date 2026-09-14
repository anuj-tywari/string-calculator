import { Test, TestingModule } from '@nestjs/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringCalculatorService],
    }).compile();

    service = module.get<StringCalculatorService>(StringCalculatorService);
  });

  // Requirement 1: Handle an empty string
  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  // Requirement 2: Handle one and two numbers
  it('should return the sum of one or two numbers', () => {
    expect(service.add('1')).toBe(1);
    expect(service.add('1,5')).toBe(6);
  });

  // Requirement 3: Handle any number of inputs
  it('should return the sum of multiple numbers', () => {
    expect(service.add('1,2,3,4,5')).toBe(15);
    expect(service.add('10,20,30')).toBe(60);
  });

  // Requirement 4: Handle newlines as delimiters
  it('should handle newlines as delimiters', () => {
    expect(service.add('1\n2,3')).toBe(6);
    expect(service.add('4\n5\n6')).toBe(15);
  });

  // Requirement 5: Support custom delimiters
  it('should support custom single-character delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  // Requirement 6: Handle negative numbers
  it('should throw an error when negative numbers are passed', () => {
    expect(() => service.add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    expect(() => service.add('1,-2,-3')).toThrow('Negative numbers not allowed: -2,-3');
  });

  // Edge Cases
  it('should return 0 for a custom delimiter with no numbers', () => {
    expect(service.add('//;\n')).toBe(0);
  });

});
