import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule, SharedModule
  ],
  providers: [HttpClientModule]
})
export class HomeModule { }
