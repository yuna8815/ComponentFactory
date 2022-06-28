import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusculoskeletalModalPageRoutingModule } from './musculoskeletal-modal-routing.module';

import { MusculoskeletalModalPage } from './musculoskeletal-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusculoskeletalModalPageRoutingModule
  ],
  declarations: [MusculoskeletalModalPage]
})
export class MusculoskeletalModalPageModule {}
