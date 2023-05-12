import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'Garfield',
      age: 10,
      breed: 'Persian',
    },
    {
      id: 2,
      name: 'Tom',
      age: 5,
      breed: 'Siamese',
    },
  ];

  findAll(): Cat[] {
    return this.cats;
  }
}
