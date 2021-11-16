import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { PersonEntity } from 'src/entities/person.entity'
import { Repository } from 'typeorm'
import { CreatePersonCommand } from '../impl/create-person.command'
import { Person } from '../../models/person.model'
import { HttpException, HttpStatus } from '@nestjs/common'

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler implements ICommandHandler<CreatePersonCommand> {
  constructor (
    @InjectRepository(PersonEntity) private personRepo: Repository<PersonEntity>,
    private readonly publisher: EventPublisher,
  ) {}

  async execute (command: CreatePersonCommand) {
    const { username, name } = command.person

    const isPersonExist = await this.personRepo.findOne({
      where: [
        { username: username },
      ]
    })

    if (isPersonExist) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST)
    }

    const personInfo = new PersonEntity()

    personInfo.username = username
    personInfo.name = name

    const person = this.publisher.mergeObjectContext(
      new Person(),
    )

    await this.personRepo.save(personInfo)

    person.savedPerson(command.person)
    person.commit()
  }
}