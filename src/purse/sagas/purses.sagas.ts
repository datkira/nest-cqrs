import { Injectable } from '@nestjs/common'
import { ofType, Saga } from '@nestjs/cqrs'
import * as clc from 'cli-color'
import { Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { CreatedPurseEvent } from '../events/impl/created-purse.event'

@Injectable()
export class PursesSagas {
  @Saga()
  savedPerson = (events$: Observable<any>): Observable<void> => {
    return events$
      .pipe(
        ofType(CreatedPurseEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [SavedPurseEvent] Saga'))
        }),
      )
  }
}
