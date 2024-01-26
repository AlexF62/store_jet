import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { PaginationModule } from './pagination/pagination.module';
import { OrderModule } from './order/order.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads'
   }),
   
     ConfigModule.forRoot(),AuthModule, UserModule, ProductModule, CategoryModule, PaginationModule, OrderModule,],
})

export class AppModule {}
