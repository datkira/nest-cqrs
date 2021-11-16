import { Injectable } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { CreatePurseDto } from './dto/create-purse.dto'
import { CreatePurseCommand } from './commands/impl/create-purse.command'
import { GetPurseQuery } from './queries/impl/get-purse.query'

@Injectable()
export class PurseService {
  constructor (
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async getAll () {
    return await this.queryBus.execute(new GetPurseQuery())
  }

  async createPurse (newPerson: CreatePurseDto) {
    console.log('PurseService.createPurse')
    return await this.commandBus.execute(new CreatePurseCommand(newPerson))
  }
}
