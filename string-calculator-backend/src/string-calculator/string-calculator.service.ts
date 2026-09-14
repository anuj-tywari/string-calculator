import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {
    add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = /[,\n]/;

        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            if (parts.length < 2) {
                throw new BadRequestException('Invalid custom delimiter format');
            }

            const customDelimiter = parts[0].slice(2);

            if (customDelimiter.startsWith('[') && customDelimiter.endsWith(']')) {
                const delimiters = customDelimiter
                    .slice(1, -1)
                    .split('][')
                    .map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                delimiter = new RegExp(delimiters.join('|'));
            } else {
                delimiter = new RegExp(customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
            }

            numbers = parts[1];
        }

        const nums = numbers
            .split(delimiter)
            .map((num) => num.trim())
            .filter((num) => num !== '')
            .map((num) => {
                const parsedNum = parseFloat(num);
                if (isNaN(parsedNum)) {
                    throw new BadRequestException(`Invalid number: ${num}`);
                }
                return parsedNum;
            });

        const negatives = nums.filter((num) => num < 0);
        if (negatives.length > 0) {
            throw new BadRequestException(`Negative numbers not allowed: ${negatives.join(',')}`);
        }

        return nums.reduce((sum, num) => sum + num, 0);
    }
}
