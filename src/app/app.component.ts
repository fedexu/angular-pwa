import { Component, OnInit } from '@angular/core';
import { PwaService } from './pwa.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './guards/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  routeStep = ['/favorite', '/', '/options'];

  constructor(
    private readonly pwaService: PwaService,
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService) { 
      this.login();
    }
  
    //TODO remove from here! need to implements a login form
    login() {
      const credential = { "username": "dummy", "password": "dummy" };
      this.authenticationService.login(credential.username, credential.password);
    }
    

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
