import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
    @IsString()
    @IsOptional()
    text?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}