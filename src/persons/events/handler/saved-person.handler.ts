import { IEventHandler } from '@nestjs/cqrs'
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator'
import * as clc from 'cli-color'
import { SavedPersonEvent } from '../impl/saved-person.event'

@EventsHandler(SavedPersonEvent)
export class SavedPersonHandler
  implements IEventHandler<SavedPersonEvent> {
  handle (event: SavedPersonEvent) {
    console.log(clc.greenBright('SavedPersonEvent...'))
  }
}
