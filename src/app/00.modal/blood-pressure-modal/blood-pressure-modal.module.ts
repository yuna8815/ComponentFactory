import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodPressureModalPageRoutingModule } from './blood-pressure-modal-routing.module';

import { BloodPressureModalPage } from './blood-pressure-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodPressureModalPageRoutingModule
  ],
  declarations: [BloodPressureModalPage]
})
export class BloodPressureModalPageModule {}
