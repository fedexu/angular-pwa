import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    FooterMenuComponent,
    CardComponent,
    InfiniteScrollComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports:[
    FooterMenuComponent,
    CardComponent,
    InfiniteScrollComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
