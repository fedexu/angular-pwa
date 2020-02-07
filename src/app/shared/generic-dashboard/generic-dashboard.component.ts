import { OnDestroy } from '@angular/core';
import { Item, FavoritesDataService } from '../services/favorites-data.service';
import { Subject } from 'rxjs';
import { HomeApiService } from 'src/app/home/home-api.service';
import { takeUntil } from 'rxjs/operators';

export class GenericDashboard implements OnDestroy {

    items = new Array<Item>();
    colNum = 1;
    rowHeight = '0vh';

    toogleContainer = false;
    innerHTML: string;

    error = false;
    showPage = false;

    protected ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private readonly homeApiServices: HomeApiService,
        private readonly favoritesDataServices: FavoritesDataService
    ) { }

    mediaResize() {
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

    fetchData() {
        this.homeApiServices.getData().pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: Array<Item>) => {
            this.items = [...this.items, ...data];
            this.items.forEach((item: Item) => {
                item.favorite = this.isInFavorites(item);
            })
        }, error => {
            this.error = true;
        });
    }

    onReachEnd() {
        if (Boolean(this.showPage)) {
            this.fetchData();
        }
    }

    toogleDetail($event: Item) {
        this.toogleContainer = true;
        this.innerHTML = $event.html.replace(/<a\s+href=/gi, '<a target="_blank" href=');
    }

    addToFavorites($event: Item) {
        ($event.favorite) ? this.favoritesDataServices.addItem($event) : this.favoritesDataServices.removeItem($event);
    }

    isInFavorites(item: Item): boolean {
        return this.favoritesDataServices.isInFavorites(item);
    }

    removeToFavorites($event) {
        // Need to check because Angular fire envent of animation even before the element loads
        if (!$event.favorite) {
            this.favoritesDataServices.removeItem($event);
        }
    }

}
