import { AggregateRoot } from '@nestjs/cqrs'
import { CreatedPersonEvent } from '../events/impl/created-person.event'
import { CreatePersonDto } from '../dto/create-person.dto'

export class Person extends AggregateRoot {
  constructor () {
    super()
  }

  savedPerson (person: CreatePersonDto) {
    this.apply(new CreatedPersonEvent(person))
  }
}