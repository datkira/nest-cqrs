import { Injectable } from '@nestjs/common'
import { GetPersonsQuery } from './queries/impl/get-persons.query'
import { SavePersonCommand } from './commands/impl/save-person.command'
import { CommandBus, QueryBus } from '@nestjs/cqrs'

@Injectable()
export class PersonService {
  constructor (
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async getAll () {
    return await this.queryBus.execute(new GetPersonsQuery())
  }

  async createEmployee (newPerson) {
    return await this.commandBus.execute(new SavePersonCommand(newPerson.name, newPerson.age))
  }
}
