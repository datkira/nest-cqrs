import { AggregateRoot } from '@nestjs/cqrs'
import { CreatePurseDto } from '../dto/create-purse.dto'
import { CreatedPurseEvent } from '../events/impl/created-purse.event'

export class Purse extends AggregateRoot {
  constructor () {
    super()
  }

  savedPurse (person: CreatePurseDto) {
    this.apply(new CreatedPurseEvent(person))
  }
}