import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreInfoModalPageRoutingModule } from './score-info-modal-routing.module';

import { ScoreInfoModalPage } from './score-info-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreInfoModalPageRoutingModule
  ],
  declarations: [ScoreInfoModalPage]
})
export class ScoreInfoModalPageModule {}
