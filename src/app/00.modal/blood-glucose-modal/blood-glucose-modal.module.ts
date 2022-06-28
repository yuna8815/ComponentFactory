import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodGlucoseModalPageRoutingModule } from './blood-glucose-modal-routing.module';

import { BloodGlucoseModalPage } from './blood-glucose-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodGlucoseModalPageRoutingModule
  ],
  declarations: [BloodGlucoseModalPage]
})
export class BloodGlucoseModalPageModule {}
