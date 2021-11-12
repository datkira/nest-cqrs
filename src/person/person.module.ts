import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonsHandler } from './queries/handlers/get-persons.handler';
import { SavePersonHandler } from './commands/handler/save-person.handler'

@Module({
  imports: [TypeOrmModule.forFeature([Person]), CqrsModule],
  controllers: [PersonController],
  providers: [GetPersonsHandler, SavePersonHandler],
})
export class PersonModule {}
