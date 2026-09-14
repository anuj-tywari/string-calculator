import { Module } from '@nestjs/common';
import { StringCalculatorController } from './string-calculator.controller';
import { StringCalculatorService } from './string-calculator.service';

@Module({
  controllers: [StringCalculatorController],
  providers: [StringCalculatorService],
})
export class StringCalculatorModule {}
