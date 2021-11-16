import { Injectable } from '@nestjs/common'
import { ofType, Saga } from '@nestjs/cqrs'
import * as clc from 'cli-color'
import { Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { CreatedPersonEvent } from '../events/impl/created-person.event'

@Injectable()
export class PersonsSagas {
  @Saga()
  savedPerson = (events$: Observable<any>): Observable<void> => {
    return events$
      .pipe(
        ofType(CreatedPersonEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [SavedPersonEvent] Saga'))
        }),
      )
  }
}
