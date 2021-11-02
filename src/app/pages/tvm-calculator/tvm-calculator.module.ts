import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvmCalculatorPageRoutingModule } from './tvm-calculator-routing.module';

import { TvmCalculatorPage } from './tvm-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvmCalculatorPageRoutingModule
  ],
  declarations: [TvmCalculatorPage]
})
export class TvmCalculatorPageModule {}
