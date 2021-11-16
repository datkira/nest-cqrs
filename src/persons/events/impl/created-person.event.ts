import { CreatePersonDto } from '../../dto/create-person.dto'

export class CreatedPersonEvent {
  constructor(
    public readonly person: CreatePersonDto,
  ) {}
}