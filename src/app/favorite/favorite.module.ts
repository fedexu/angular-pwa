import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { FavoriteRoutingModule } from './favorite-routing.module';

@NgModule({
  declarations: [FavoriteComponent, TestComponent],
  imports: [
    CommonModule, 
    FavoriteRoutingModule
  ],
  providers: [HttpClientModule]
})
export class FavoriteModule { }
