import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeInAnimation } from 'animation-lib';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations: [
    fadeInOnEnterAnimation({delay: 500, duration:500}),
    fadeOutOnLeaveAnimation({duration:500}),
    fadeInAnimation({duration:500})
  ]
})
export class FeaturesComponent implements OnInit {

  eraseData = false;

  erased = false;

  constructor(
    private readonly localStorage: LocalStorage
  ) { }

  ngOnInit() {
  }

  deleteLocalStorage() {
    this.localStorage.clear().subscribe(() => {
      this.erased = true;
    });
  }

}
