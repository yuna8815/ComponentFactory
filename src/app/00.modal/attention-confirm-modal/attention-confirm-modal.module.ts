import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttentionConfirmModalPageRoutingModule } from './attention-confirm-modal-routing.module';

import { AttentionConfirmModalPage } from './attention-confirm-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttentionConfirmModalPageRoutingModule
  ],
  declarations: [AttentionConfirmModalPage]
})
export class AttentionConfirmModalPageModule {}
