import { Component, OnInit } from '@angular/core';
import { PwaService } from './pwa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  routeStep = ['/favorite', '/', '/options'];

  constructor(
    private readonly pwaService: PwaService,
    private readonly router: Router) { }

  ngOnInit() { }

  onSwipeLeft($event) {
    const routeIndex = this.routeStep.indexOf(this.router.url);
    if ( routeIndex !== -1 && routeIndex !== 0 ){
      this.router.navigate([this.routeStep[routeIndex -1]]);
    }
  }

  onSwipeRight($event) {
    const routeIndex = this.routeStep.indexOf(this.router.url);
    if ( routeIndex !== -1 && routeIndex !== this.routeStep.length ){
      this.router.navigate([this.routeStep[routeIndex + 1]]);
    }
  }

}
