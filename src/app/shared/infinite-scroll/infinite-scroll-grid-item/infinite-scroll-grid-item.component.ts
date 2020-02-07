import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infinite-scroll-grid-item',
  template: '<ng-content></ng-content>'
})
export class InfiniteScrollGridItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
