import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonEntity } from 'src/persons/person.entity'
import { PersonController } from './person.controller'
import { CqrsModule } from '@nestjs/cqrs'
import { GetPersonsHandler } from './queries/handlers/get-persons.handler'
import { SavePersonHandler } from './commands/handler/save-person.handler'
import { PersonService } from './person.service'
import { PersonsSagas } from './sagas/persons.sagas'
import { EventHandlers } from './events/handler'

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity]), CqrsModule],
  controllers: [PersonController],
  providers: [GetPersonsHandler, SavePersonHandler, PersonService, PersonsSagas, ...EventHandlers],
})
export class PersonModule {}
