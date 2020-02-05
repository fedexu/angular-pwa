import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../services/favorites-data.service';
import { slideOutUpAnimation } from 'animation-lib';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], 
  animations:[
    slideOutUpAnimation({translate: '70%'}),
  ]
})
export class CardComponent implements OnInit {

  @Input() item: Item;
  @Output() iconClicked = new EventEmitter();

  animationEnds;

  constructor() { }

  ngOnInit() {  }

  onIconClick() {
    this.item.favorite = !Boolean(this.item.favorite);
    this.iconClicked.emit(this.item);
  }

}
