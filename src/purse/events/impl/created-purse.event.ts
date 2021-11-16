import { CreatePurseDto } from '../../dto/create-purse.dto'

export class CreatedPurseEvent {
  constructor (
    public readonly purse: CreatePurseDto,
  ) {}
}