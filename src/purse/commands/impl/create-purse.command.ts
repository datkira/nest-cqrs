import { CreatePurseDto } from '../../dto/create-purse.dto'

export class CreatePurseCommand {
  constructor (
    public readonly purse: CreatePurseDto,
  ) {}
}
