import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {

  @Output() clickTabEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clicked(idTabClicked: string) {
    this.clickTabEvent.emit({ idTabClicked });
  }

}
