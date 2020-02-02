import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() colNum: number;
  @Input() gap: string;
  @Input() elementsNumber: number;
  @Input() rowHeight: string;

  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', { static: false }) anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  id = 'infinite_scroll_grid_' + Math.random();
  infiniteGridElement;
  elemntComputed;

  constructor(private host: ElementRef) { }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    const options = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

  }

  ngAfterViewInit() {
    this.observer.observe(this.anchor.nativeElement);

    const th = this;
    var checkExist = setInterval(function () {
      if (document.getElementById(th.id)) {
        th.infiniteGridElement = document.getElementById(th.id);
        th.elemntComputed = window.getComputedStyle(th.infiniteGridElement);

        th.infiniteGridElement.style.setProperty(`--gap`, th.gap);
        th.infiniteGridElement.style.setProperty(`--colNum`, th.colNum);
        th.infiniteGridElement.style.setProperty(`--rowHeight`, th.rowHeight);
        th.updateVar();
        clearInterval(checkExist);
      }
    }, 100); // check every 100ms

  }

  ngOnChanges() {
    if (this.infiniteGridElement) {
      this.infiniteGridElement.style.setProperty(`--gap`, this.gap);
      this.infiniteGridElement.style.setProperty(`--colNum`, this.colNum);
      this.infiniteGridElement.style.setProperty(`--rowHeight`, this.rowHeight);
      this.updateVar();
    }
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  updateVar() {
    let rowNum = parseInt(this.elemntComputed.getPropertyValue("--rowNum"));
    let colNum = parseInt(this.elemntComputed.getPropertyValue("--colNum"));
    this.infiniteGridElement.style.setProperty(`--rowNum`, Math.ceil(this.elementsNumber / colNum) + "");
  }

  changeCol(action) {
    let colNum = parseInt(this.elemntComputed.getPropertyValue("--colNum"));
    if (action == 'add') {
      this.infiniteGridElement.style.setProperty(`--colNum`, colNum + 1 + "");
    } else {
      this.infiniteGridElement.style.setProperty(`--colNum`, colNum - 1 + "");
    }
    this.updateVar();
  }

}