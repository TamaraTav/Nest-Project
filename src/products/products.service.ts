import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { categoryId, ...productData } = createProductDto;
      const category = await this.prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      });

      if (!category) {
        throw new Error('Category not found');
      }

      return this.prisma.products.create({
        data: {
          ...productData,
          category: {
            connect: {
              id: categoryId,
            },
          },
          created_at: new Date(),
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
