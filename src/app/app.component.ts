import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
import { zoomInAnimation } from 'animation-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    zoomInAnimation()
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
