import { IEventHandler } from '@nestjs/cqrs'
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator'
import { CreatedPersonEvent } from '../impl/created-person.event'
import * as clc from 'cli-color'

@EventsHandler(CreatedPersonEvent)
export class CreatedPersonHandler
  implements IEventHandler<CreatedPersonEvent> {
  handle (event: CreatedPersonEvent) {
    console.log(clc.greenBright('CreatedPersonHandler...'))
  }
}
