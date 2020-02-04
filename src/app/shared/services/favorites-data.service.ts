import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class FavoritesDataService {

  private items = new Array<Item>();
  private dbEntity = 'articles';

  private eventItems: ReplaySubject<Array<Item>> = new ReplaySubject(1);

  constructor(
    private readonly localStorage: LocalStorage
  ) {
    this.localStorage.getItem(this.dbEntity).subscribe((articles: Array<Item>) => {
      if (Boolean(articles)) {
        this.items = articles;
      }
      this.eventItems.next(this.items);
    })
  }

  getItems(): ReplaySubject<Array<Item>> {
    return this.eventItems;
  }

  addItems(items: Array<Item>) {
    let itemsCopy = [...items];
    items.forEach((item: Item) => {
      this.addItem(item);
    });
  }

  addItem(item: Item) {
    let itemCopy = { ...item };
    this.items.push({ ...itemCopy, favorite: true });
    this.alignStorage();
  }

  removeItem(item: Item) {
    if (this.isInFavorites(item)) {
      this.items.splice(this.items.indexOf(item), 1);
      this.alignStorage();
    }
  }

  isInFavorites(item: Item): boolean {
    let find = this.items.find((it: Item) => {
      return it.url === item.url;
    });
    return (Boolean(find)) ? true : false;
  }

  alignStorage() {
    this.localStorage.setItem(this.dbEntity, this.items).subscribe(() => {
      this.eventItems.next(this.items);
    });
  }

}

export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
  favorite: boolean;
}

