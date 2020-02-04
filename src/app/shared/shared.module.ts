import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { LoaderComponent } from './loader/loader.component';
import { InfiniteScrollGridItemComponent } from './infinite-scroll/infinite-scroll-grid-item/infinite-scroll-grid-item.component';
import { BottomUpPageContainerComponent } from './bottom-up-page-container/bottom-up-page-container.component';

@NgModule({
  declarations: [
    FooterMenuComponent,
    CardComponent,
    InfiniteScrollComponent,
    LoaderComponent,
    InfiniteScrollGridItemComponent,
    BottomUpPageContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports:[
    FooterMenuComponent,
    CardComponent,
    InfiniteScrollComponent,
    LoaderComponent,
    InfiniteScrollGridItemComponent
  ]
})
export class SharedModule { }
