import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanTrackerPageRoutingModule } from './loan-tracker-routing.module';

import { LoanTrackerPage } from './loan-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanTrackerPageRoutingModule
  ],
  declarations: [LoanTrackerPage]
})
export class LoanTrackerPageModule {}
