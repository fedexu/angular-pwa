import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [{
  path: '', component: FavoriteComponent,
  children: [
    { path: '', component: DashboardComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
