import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvmResultsPageRoutingModule } from './tvm-results-routing.module';

import { TvmResultsPage } from './tvm-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvmResultsPageRoutingModule
  ],
  declarations: [TvmResultsPage]
})
export class TvmResultsPageModule {}
