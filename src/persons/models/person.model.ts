import { AggregateRoot } from '@nestjs/cqrs'
import { SavedPersonEvent } from '../events/impl/saved-person.event'

export class Person extends AggregateRoot {
  constructor() {
    super();
  }

  savedPerson (name, age) {
    this.apply(new SavedPersonEvent(name, age))
  }
}