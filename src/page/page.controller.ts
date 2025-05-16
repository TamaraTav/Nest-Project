import { Controller, Get, Param } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(private readonly service: PageService) {}

  @Get()
  getAllPages(): string {
    return this.service.getAllPages();
  }

  @Get(':id')
  getOnePage(@Param('id') id: string): any {
    return this.service.getPage(+id);
  }
}
