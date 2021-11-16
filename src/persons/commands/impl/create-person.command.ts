import { CreatePersonDto } from '../../dto/create-person.dto'

export class CreatePersonCommand {
  constructor (
    public readonly person: CreatePersonDto,
  ) {}
}
