import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Item, HomeApiService } from '../home-api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items = new Array<Item>();
  colNum = 1;
  rowHeight = '0vh';

  constructor(
    private readonly homeApiService: HomeApiService
  ) { }

  ngOnInit() {
    const th = this;
    window.addEventListener("resize", resize);
    function resize(){
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


  fetchData() {
    this.homeApiService.getData().subscribe((data: Array<Item>) => {
      this.items = [...this.items, ...data];
    }, error => { 
      console.log(error);
    });
  }

  onReachEnd() {
    this.fetchData();
  }

}
