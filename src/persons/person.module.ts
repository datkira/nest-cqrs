import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonEntity } from 'src/entities/person.entity'
import { PersonController } from './person.controller'
import { CqrsModule } from '@nestjs/cqrs'
import { CreatePersonHandler } from './commands/handler/create-person.handler'
import { PersonService } from './person.service'
import { PersonsSagas } from './sagas/persons.sagas'
import { EventHandlers } from './events/handler'
import { QueryHandlers } from './queries/handlers'

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity]), CqrsModule],
  controllers: [PersonController],
  providers: [
    CreatePersonHandler,
    PersonService,
    PersonsSagas,
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class PersonModule {}
