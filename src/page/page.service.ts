import { Injectable } from '@nestjs/common';
import { PageInterface, PhotoInterface } from './interface';
import path from 'path';

@Injectable()
export class PageService {
  private readonly photo: PhotoInterface;

  private readonly pages: PageInterface[] = [
    {
      id: 1,
      title: 'home',
      content: 'This is Home page',
      tags: ['home', 'index'],
      photos: [
        {
          path: 'https://www.pexels.com/photo/purple-petal-flowers-381739/',
          type: 'image/jpeg',
          size: 1234,
          width: 200,
          height: 300,
          alt: 'a random image',
          title: 'nature',
        },
        {
          path: 'https://www.pexels.com/photo/purple-petal-flowers-381739/',
          type: 'image/jpeg',
          size: 1234,
          width: 200,
          height: 300,
          alt: 'a random image',
          title: 'nature',
        },
        {
          path: 'https://www.pexels.com/photo/purple-petal-flowers-381739/',
          type: 'image/jpeg',
          size: 1234,
          width: 200,
          height: 300,
          alt: 'a random image',
          title: 'nature',
        },
      ],
    },
    {
      id: 2,
      title: 'About',
      content: 'This is the about page',
    },
    {
      id: 3,
      title: 'Contact',
      content: 'This is the contact page',
    },
  ];

  public getAllPages(): any {
    return this.pages;
  }

  public getPage(id: number): any {
    return this.pages.find((page) => page.id === id);
  }
}
