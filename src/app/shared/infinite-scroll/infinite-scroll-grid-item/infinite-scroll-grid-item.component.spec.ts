import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollGridItemComponent } from './infinite-scroll-grid-item.component';

describe('InfiniteScrollGridItemComponent', () => {
  let component: InfiniteScrollGridItemComponent;
  let fixture: ComponentFixture<InfiniteScrollGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
