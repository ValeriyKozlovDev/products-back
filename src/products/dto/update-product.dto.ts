import { IsNotEmpty, IsString, IsPositive, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly fullDescription: string;

  @IsNumber()
  @IsNotEmpty()
  readonly year: number;
}
