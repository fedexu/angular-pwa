import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomUpPageContainerComponent } from './bottom-up-page-container.component';

describe('BottomUpPageContainerComponent', () => {
  let component: BottomUpPageContainerComponent;
  let fixture: ComponentFixture<BottomUpPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomUpPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomUpPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
