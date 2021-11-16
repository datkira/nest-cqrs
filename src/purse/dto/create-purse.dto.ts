import { IsNumber, IsString, MaxLength } from 'class-validator'
import { PersonEntity } from '../../entities/person.entity'

export class CreatePurseDto {
  @IsNumber()
  @MaxLength(20)
  readonly balance: number

  @IsString()
  @MaxLength(20)
  readonly person: PersonEntity
}
