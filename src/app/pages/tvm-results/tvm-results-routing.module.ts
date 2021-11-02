import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvmResultsPage } from './tvm-results.page';

const routes: Routes = [
  {
    path: '',
    component: TvmResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvmResultsPageRoutingModule {}
