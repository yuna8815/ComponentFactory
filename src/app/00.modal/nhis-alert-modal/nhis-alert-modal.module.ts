import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhisAlertModalPageRoutingModule } from './nhis-alert-modal-routing.module';

import { NhisAlertModalPage } from './nhis-alert-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhisAlertModalPageRoutingModule
  ],
  declarations: [NhisAlertModalPage]
})
export class NhisAlertModalPageModule {}
