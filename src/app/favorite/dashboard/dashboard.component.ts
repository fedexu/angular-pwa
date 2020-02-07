import { Component, OnInit } from '@angular/core';
import { Item, FavoritesDataService } from 'src/app/shared/services/favorites-data.service';
import { takeUntil } from 'rxjs/operators';
import { fadeOutAnimation, fadeInOnEnterAnimation } from 'animation-lib';
import { GenericDashboard } from 'src/app/shared/generic-dashboard/generic-dashboard.component';
import { HomeApiService } from 'src/app/home/home-api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    fadeOutAnimation(),
    fadeInOnEnterAnimation(),
  ]
})
export class DashboardComponent extends GenericDashboard implements OnInit {

  constructor(
    private readonly homeApiService: HomeApiService,
    private readonly favoritesDataService: FavoritesDataService
  ) {
    super(homeApiService, favoritesDataService);
  }

  ngOnInit() {
    this.favoritesDataService.getItems().pipe(takeUntil(this.ngUnsubscribe)).subscribe((items: Array<Item>) => {
      this.items = items;
    });

    this.mediaResize();
  }

}
