import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [{
  path: '', component: FavoriteComponent,
  children: [
    { path: '', component: TestComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
