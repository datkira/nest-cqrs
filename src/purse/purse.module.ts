import { Module } from '@nestjs/common'
import { PurseService } from './purse.service'
import { PurseController } from './purse.controller'
import { EventHandlers } from './events/handler'
import { GetPurseHandler } from './queries/handlers/get-purse.handler'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CqrsModule } from '@nestjs/cqrs'
import { PurseEntity } from '../entities/purse.entity'
import { PursesSagas } from './sagas/purses.sagas'
import { CreatePurseHandler } from './commands/handler/create-purse.handler'

@Module({
  imports: [TypeOrmModule.forFeature([PurseEntity]), CqrsModule],
  controllers: [PurseController],
  providers: [
    PurseService,
    GetPurseHandler,
    CreatePurseHandler,
    ...EventHandlers,
    PursesSagas
  ],
})
export class PurseModule {}
