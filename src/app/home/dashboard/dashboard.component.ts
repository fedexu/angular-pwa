import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { FavoritesDataService } from 'src/app/shared/services/favorites-data.service';
import {
  fadeInOnEnterAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation
} from 'animation-lib';
import { GenericDashboard } from 'src/app/shared/generic-dashboard/generic-dashboard.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation({ duration: 500 }),
    slideInRightOnEnterAnimation({ duration: 500 })
  ]
})
export class DashboardComponent extends GenericDashboard implements OnInit, AfterViewInit {

  constructor(
    private readonly homeApiService: HomeApiService,
    private readonly favoritesDataService: FavoritesDataService
  ) {
    super(homeApiService, favoritesDataService);
  }

  ngOnInit() {
    this.mediaResize();
  }

  ngAfterViewInit() {
    this.showPage = true;
  }

}
