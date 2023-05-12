import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [CatsController],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
