import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConversorComponent } from './components';
import { MoedaService } from './services';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService
  ]
})
export class ConversorModule { }
