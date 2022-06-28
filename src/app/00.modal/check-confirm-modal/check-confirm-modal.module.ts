import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckConfirmModalPageRoutingModule } from './check-confirm-modal-routing.module';

import { CheckConfirmModalPage } from './check-confirm-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckConfirmModalPageRoutingModule
  ],
  declarations: [CheckConfirmModalPage]
})
export class CheckConfirmModalPageModule {}
