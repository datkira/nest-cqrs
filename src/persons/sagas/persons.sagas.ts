import { Injectable } from '@nestjs/common'
import { ofType, Saga } from '@nestjs/cqrs'
import * as clc from 'cli-color'
import { Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { SavedPersonEvent } from '../events/impl/saved-person.event'

@Injectable()
export class PersonsSagas {
  @Saga()
  savedPerson = (events$: Observable<any>): Observable<void> => {
    return events$
      .pipe(
        ofType(SavedPersonEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [SavedPersonEvent] Saga'))
        }),
      )
  }
}
