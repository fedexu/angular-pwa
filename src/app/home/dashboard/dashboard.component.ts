import { Component, OnInit } from '@angular/core';
import { Item, HomeApiService } from '../home-api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items = new Array<Item>();

  constructor(
    private readonly homeApiService: HomeApiService
  ) { }

  ngOnInit() {  }

  fetchData() {
    this.homeApiService.getData().subscribe((data: Array<Item>) => {
      this.items = [...this.items, ...data];
    }, error => { console.error(error); });
  }

  onReachEnd(){
    this.fetchData();
  }

}
