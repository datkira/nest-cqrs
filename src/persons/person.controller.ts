import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common'
import { PersonService } from './person.service'
import { CreatePersonDto } from './dto/create-person.dto'

@Controller('person')
export class PersonController {
  constructor (
    private personService: PersonService,
  ) {}

  @Get('all')
  async getAll () {
    return await this.personService.getAll()
  }

  @Post('add')
  @HttpCode(201)
  async createPerson (@Res() res, @Body() newPerson: CreatePersonDto) {
    try {
      await this.personService.createPerson(newPerson)

      return res.status(HttpStatus.OK).json({
        message: 'Person created successfully!',
        status: 200,
      })
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        status: 400,
      })
    }
  }
}
