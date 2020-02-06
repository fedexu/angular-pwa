import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options.component';
import { FeaturesComponent } from './features/features.component';
import { OptionsRoutingModule } from './options-routing.module'


@NgModule({
  declarations: [OptionsComponent, FeaturesComponent],
  imports: [
    CommonModule,
    OptionsRoutingModule
  ]
})
export class OptionsModule { }
