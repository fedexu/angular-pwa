import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../services/favorites-data.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Item;
  @Input() iconFilled: boolean;
  @Output() iconClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIconClick() {
    this.iconFilled = !Boolean(this.iconFilled);
    this.iconClicked.emit({item: this.item , favorite: this.iconFilled});
  }

}
