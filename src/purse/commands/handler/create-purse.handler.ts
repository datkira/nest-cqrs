import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePurseCommand } from '../impl/create-purse.command'
import { PurseEntity } from '../../../entities/purse.entity'
import { Purse } from '../../models/purse.model'

@CommandHandler(CreatePurseCommand)
export class CreatePurseHandler implements ICommandHandler<CreatePurseCommand> {
  constructor (
    @InjectRepository(PurseEntity) private purseRepo: Repository<PurseEntity>,
    private readonly publisher: EventPublisher,
  ) {}

  async execute (command: CreatePurseCommand) {
    const { balance, person } = command.purse

    const purseInfo = new PurseEntity()

    purseInfo.balance = balance
    purseInfo.person = person

    const purse = this.publisher.mergeObjectContext(
      new Purse(),
    )

    await this.purseRepo.save(purseInfo)

    purse.savedPurse(command.purse)
    purse.commit()
  }
}