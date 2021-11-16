import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { PersonEntity } from 'src/persons/person.entity'
import { Repository } from 'typeorm'
import { SavePersonCommand } from '../impl/save-person.command'
import { Person } from '../../models/person.model'

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand> {

  constructor (
    @InjectRepository(PersonEntity) private personRepo: Repository<PersonEntity>,
    private readonly publisher: EventPublisher,
  ) {}

  async execute (command: SavePersonCommand) {
    const personInfo = new PersonEntity()
    personInfo.age = command.age
    personInfo.name = command.name

    const person = this.publisher.mergeObjectContext(
      new Person()
    )

    await this.personRepo.insert(personInfo)

    person.savedPerson(personInfo.name, personInfo.age)
    person.commit()
  }
}