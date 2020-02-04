import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../services/favorites-data.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Item;
  @Output() iconClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {  }

  onIconClick() {
    this.item.favorite = !Boolean(this.item.favorite);
    this.iconClicked.emit(this.item);
  }

}
