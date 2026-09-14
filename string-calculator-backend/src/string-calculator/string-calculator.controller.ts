import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { StringCalculatorService } from './string-calculator.service';
import { AddNumbersDto } from './dto/add-numbers.dto';

@Controller('string-calculator')
export class StringCalculatorController {
    constructor(private readonly calculatorService: StringCalculatorService) {}

    @Post('add')
    calculateSum(@Body() addNumbersDto: AddNumbersDto): { result: number } {
        try {
            const result = this.calculatorService.add(addNumbersDto.numbers);
            return { result };
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }
}
