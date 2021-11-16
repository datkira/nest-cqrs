import { IEventHandler } from '@nestjs/cqrs'
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator'
import { CreatedPurseEvent } from '../impl/created-purse.event'
import * as clc from 'cli-color'

@EventsHandler(CreatedPurseEvent)
export class CreatedPurseHandler
  implements IEventHandler<CreatedPurseEvent> {
  handle (event: CreatedPurseEvent) {
    console.log(clc.greenBright('CreatedPurseHandler...'))
  }
}
