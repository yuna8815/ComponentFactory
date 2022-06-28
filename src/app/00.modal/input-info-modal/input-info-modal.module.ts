import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputInfoModalPageRoutingModule } from './input-info-modal-routing.module';

import { InputInfoModalPage } from './input-info-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputInfoModalPageRoutingModule
  ],
  declarations: [InputInfoModalPage]
})
export class InputInfoModalPageModule {}
