import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonEntity } from 'src/entities/person.entity'
import { PersonController } from './person.controller'
import { CqrsModule } from '@nestjs/cqrs'
import { GetPersonsHandler } from './queries/handlers/get-persons.handler'
import { CreatePersonHandler } from './commands/handler/create-person.handler'
import { PersonService } from './person.service'
import { PersonsSagas } from './sagas/persons.sagas'
import { EventHandlers } from './events/handler'

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity]), CqrsModule],
  controllers: [PersonController],
  providers: [GetPersonsHandler, CreatePersonHandler, PersonService, PersonsSagas, ...EventHandlers],
})
export class PersonModule {}
