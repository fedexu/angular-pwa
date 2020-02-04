import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item, FavoritesDataService } from 'src/app/shared/services/favorites-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  items = new Array<Item>();
  colNum = 0;
  rowHeight = '0vh';

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private readonly favoritesDataService: FavoritesDataService
  ) { }

  ngOnInit() {
    this.favoritesDataService.getItems().pipe(takeUntil(this.ngUnsubscribe)).subscribe((items: Array<Item>) => {
      this.items = items;
    });
    
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

  ngOnDestroy() {
    // This aborts all HTTP requests.
    this.ngUnsubscribe.next();
    // This completes the subject properlly.
    this.ngUnsubscribe.complete();
  }

  removeToFavorites($event) {
    this.favoritesDataService.removeItem($event.item);
  }

}