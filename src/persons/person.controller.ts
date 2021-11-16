import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { SavePersonCommand } from './commands/impl/save-person.command'
import { PersonService } from './person.service'

@Controller('person')
export class PersonController {
  constructor (
    private personService: PersonService
  ) {}

  @Get('all')
  async getAll () {
    return await this.personService.getAll()
  }

  @Post('add')
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee (@Body() newPerson: SavePersonCommand) {
    return await this.personService.createEmployee(newPerson)
  }
}
