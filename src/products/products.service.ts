import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    try {
      return this.prisma.products.create({
        data: {
          ...createProductDto,
          category: {
            connect: {
              id: parseInt(createProductDto.category),
            },
          },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    return this.prisma.products.findMany();
  }

  findOne(id: number) {
    return this.prisma.products.findUnique({
      where: { id },
    });
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return this.prisma.products.update({
  //     where: { id },
  //     data: updateProductDto,
  //     include: {
  //       category: true,
  //     },
  //   });
  // }

  remove(id: number) {
    return this.prisma.products.delete({
      where: { id },
    });
  }
}
