import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttentionAlertModalPageRoutingModule } from './attention-alert-modal-routing.module';

import { AttentionAlertModalPage } from './attention-alert-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttentionAlertModalPageRoutingModule
  ],
  declarations: [AttentionAlertModalPage]
})
export class AttentionAlertModalPageModule {}
