import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', loadChildren: './home/home.module#HomeModule'},
  { path:'favorite', loadChildren: './favorite/favorite.module#FavoriteModule'}, 
  { path:'options', loadChildren: './options/options.module#OptionsModule'}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
