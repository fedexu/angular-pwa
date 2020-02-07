import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderState {
  show: boolean;
  error: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private readonly loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next({ show: true } as LoaderState);
  }

  hide() {
    this.loaderSubject.next({ show: false } as LoaderState);
  }

  error(message) {
    this.loaderSubject.next({ error: true, message: message } as LoaderState);
  }
}
