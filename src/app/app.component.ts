import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
import { fadeInOutRoutingAnimation } from './routing.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOutRoutingAnimation()
  ]
})
export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ApiService
  ) { }

  ngOnInit() { }

  animation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
