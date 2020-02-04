import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavoriteComponent, DashboardComponent],
  imports: [
    CommonModule, 
    FavoriteRoutingModule,
    SharedModule
  ],
  providers: [HttpClientModule]
})
export class FavoriteModule { }
