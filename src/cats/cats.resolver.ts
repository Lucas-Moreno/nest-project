import { Resolver, Query } from '@nestjs/graphql';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [Cat])
  async cats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
