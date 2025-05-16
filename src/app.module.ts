import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PrismaModule } from './prisma/prisma.module';
import { PageController } from './page/page.controller';
import { ProductsController } from './products/products.controller';
import { PageService } from './page/page.service';
import { PageModule } from './page/page.module';

@Module({
  imports: [ProductsModule, PrismaModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('products');
    //{path: 'products', method: RequestMethod.GET}
    //ასე თუ ჩავუწერ, დავუკონკრეტებ პასს და მეთოდს
  }
}
