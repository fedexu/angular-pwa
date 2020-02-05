import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { Item, FavoritesDataService } from 'src/app/shared/services/favorites-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  items = new Array<Item>();
  colNum = 1;
  rowHeight = '0vh';
  showPage = false;

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private readonly homeApiService: HomeApiService,
    private readonly favoritesDataService: FavoritesDataService
  ) { }

  ngOnInit() {
    const th = this;
    window.addEventListener("resize", resize);
    function resize() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        //desktop size
        th.colNum = 4;
        th.rowHeight = '30vh';
      } else {
        th.colNum = 1;
        th.rowHeight = '30vh';
      }
    }
    resize();
  }

  ngAfterViewInit() {
    this.showPage = true;
  }

  ngOnDestroy() {
    // This aborts all HTTP requests.
    this.ngUnsubscribe.next();
    // This completes the subject properlly.
    this.ngUnsubscribe.complete();
  }


  fetchData() {
    this.homeApiService.getData().pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: Array<Item>) => {
      this.items = [...this.items, ...data];
      this.items.forEach((item: Item) => {
        item.favorite = this.isInFavorites(item);
      })
    });
  }

  onReachEnd() {
    if (Boolean(this.showPage)) {
      this.fetchData();
    }
  }

  addToFavorites($event: Item) {
    ($event.favorite) ? this.favoritesDataService.addItem($event) : this.favoritesDataService.removeItem($event);
  }

  isInFavorites(item: Item): boolean {
    return this.favoritesDataService.isInFavorites(item);
  }

}
