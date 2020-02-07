import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LoaderService } from './shared/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  promptEvent;

  constructor(
    private readonly swUpdate: SwUpdate,
    private readonly loaderService: LoaderService
  ) {
    this.swUpdate.available.subscribe(event => {
      this.loaderService.error('New version avaible!');
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
