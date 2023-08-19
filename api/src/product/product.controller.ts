import { Controller, Post, Body } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post()
  createPost(
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('description') description?: string,
  ) {
    return this.productService.create(name, price, description);
  }
}
