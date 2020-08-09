import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';
import {Activity} from '../models/activity';

@Injectable({providedIn: 'root'})
export class ActivityService {

  constructor(private zone: NgZone) {
  }

  getSseEvent(url: string): Observable<Activity[]> {
    return new Observable(subscriber => {
      const eventSource = new EventSource(url);
      eventSource.onmessage = evt => {
        const data = JSON.parse(evt.data);
        console.log(data);
        this.zone.run(() => subscriber.next(data));
      };
      return () => eventSource.close();
    });
  }

}
