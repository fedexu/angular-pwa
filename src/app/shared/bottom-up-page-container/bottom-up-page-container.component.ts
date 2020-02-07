import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation } from 'animation-lib';

@Component({
  selector: 'bottom-up-page-container',
  templateUrl: './bottom-up-page-container.component.html',
  styleUrls: ['./bottom-up-page-container.component.css'],
  animations: [
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
  ]
})
export class BottomUpPageContainerComponent implements OnInit {

  @Output() close = new EventEmitter();
  closeContainer = false;

  constructor() { }

  ngOnInit() { }

  clseContainer() {
    if (Boolean(this.closeContainer)) {
      this.close.emit()
    }
  }

}
