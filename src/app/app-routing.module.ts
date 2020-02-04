import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottomUpPageContainerComponent } from './shared/bottom-up-page-container/bottom-up-page-container.component';


const routes: Routes = [
  { path:'', loadChildren: './home/home.module#HomeModule'},
  { path:'favorite', loadChildren: './favorite/favorite.module#FavoriteModule'},
  { path:'bottom-up-Page',component: BottomUpPageContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
