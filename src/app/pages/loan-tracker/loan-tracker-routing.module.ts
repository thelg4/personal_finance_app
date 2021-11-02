import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanTrackerPage } from './loan-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: LoanTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanTrackerPageRoutingModule {}
