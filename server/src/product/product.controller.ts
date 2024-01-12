import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { GetAllProductDto } from './dto/get-all.product.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @Get()
  async getAll(@Query() queryDto: GetAllProductDto) {
    return this.productService.getAll(queryDto)
  }

  @Get('similar/:id')
  async getSimilar(@Param('id') id: string) {
    return this.productService.getSimilar(+id)
  }

  @Get('by-slug/:slug')
  async getProductBySlug(@Param('slug') slug: string) {
    return this.productService.bySlug(slug)
  }

   
  @Get('by-category/:categorySlug')
  async getProductByCategory(@Param('categorySlug') categorySlug: string) {
    return this.productService.byCategory(categorySlug)
  }


  @Auth('admin')
  @Post()
  async createProduct() {
    return this.productService.create()
  }


  @Put(':id')
  @Auth('admin')
  async updateProduct(@Param('id') id: string, @Body() productDto: ProductDto) {
    return this.productService.update(+id, productDto)
  }

  @Get(':id')
  @Auth('admin')
  async getProduct(@Param('id') id: string) {
    return this.productService.getById(+id)
  }

 
  @Delete(':id')
  @Auth('admin')
  async deleteProduct(@Param('id') id: string, ) {
    return this.productService.delete(+id, )
  }


}
