import { Component, OnInit } from '@angular/core';
import { ApiService, Item } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-pwa';
  items: Array<Item>;

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe((data: Array<Item>) => {
      this.items = data;
    }, error => { console.error(error); });
  }

  showView($event) {
    console.log($event);
  }

}
