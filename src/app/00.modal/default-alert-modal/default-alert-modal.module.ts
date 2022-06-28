import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefaultAlertModalPageRoutingModule } from './default-alert-modal-routing.module';

import { DefaultAlertModalPage } from './default-alert-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultAlertModalPageRoutingModule
  ],
  declarations: [DefaultAlertModalPage]
})
export class DefaultAlertModalPageModule {}
