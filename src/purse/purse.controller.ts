import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common'
import { PurseService } from './purse.service'
import { CreatePurseDto } from './dto/create-purse.dto'

@Controller('purse')
export class PurseController {
  constructor (private readonly purseService: PurseService) {}

  @Get('all')
  async getAll () {
    return await this.purseService.getAll()
  }

  @Post('add')
  @HttpCode(201)
  async createPerson (@Res() res, @Body() newPurse: CreatePurseDto) {
    try {
      await this.purseService.createPurse(newPurse)

      return res.status(HttpStatus.OK).json({
        message: 'Purse created successfully!',
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
