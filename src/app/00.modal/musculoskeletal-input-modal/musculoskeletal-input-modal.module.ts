import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusculoskeletalInputModalPageRoutingModule } from './musculoskeletal-input-modal-routing.module';

import { MusculoskeletalInputModalPage } from './musculoskeletal-input-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusculoskeletalInputModalPageRoutingModule
  ],
  declarations: [MusculoskeletalInputModalPage]
})
export class MusculoskeletalInputModalPageModule {}
