import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsString()
  @IsOptional()
  brand: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock: number;
}
