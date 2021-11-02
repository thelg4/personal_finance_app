import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvmCalculatorPage } from './tvm-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: TvmCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvmCalculatorPageRoutingModule {}
