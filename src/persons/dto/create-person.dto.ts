import { IsString, MaxLength } from 'class-validator'

export class CreatePersonDto {
  @IsString()
  @MaxLength(30)
  readonly username: string

  @IsString()
  @MaxLength(50)
  readonly name: string
}
