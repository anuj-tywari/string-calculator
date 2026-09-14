import { IsNotEmpty, IsString } from 'class-validator';

export class AddNumbersDto {
    @IsString()
    @IsNotEmpty()
    numbers: string;
}
