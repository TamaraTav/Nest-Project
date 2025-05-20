import { Controller, Get, Param, Render } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(private readonly service: PageService) {}

  @Get()
  @Render('pages')
  getAllPages(): any {
    return this.service.getAllPages();
  }

  @Get(':id')
  getOnePage(@Param('id') id: string): any {
    return this.service.getPage(+id);
  }
}
