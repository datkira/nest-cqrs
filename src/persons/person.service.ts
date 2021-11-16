import { Injectable } from '@nestjs/common'
import { GetPersonsQuery } from './queries/impl/get-persons.query'
import { CreatePersonCommand } from './commands/impl/create-person.command'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { CreatePersonDto } from './dto/create-person.dto'
import { GetPersonQuery } from './queries/impl/get-person.query'

@Injectable()
export class PersonService {
  constructor (
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async getAll () {
    return await this.queryBus.execute(new GetPersonsQuery())
  }

  async getPerson (personId: number) {
    return await this.queryBus.execute(new GetPersonQuery(personId))
  }

  async createPerson (newPerson: CreatePersonDto) {
    return await this.commandBus.execute(new CreatePersonCommand(newPerson))
  }
}
