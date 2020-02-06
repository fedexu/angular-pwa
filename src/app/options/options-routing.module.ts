import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './options.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [{
  path: '', component: OptionsComponent,
  children: [
    { path: '', component: FeaturesComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
