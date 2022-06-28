import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainLevelModalPageRoutingModule } from './pain-level-modal-routing.module';

import { PainLevelModalPage } from './pain-level-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainLevelModalPageRoutingModule
  ],
  declarations: [PainLevelModalPage]
})
export class PainLevelModalPageModule {}
