import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusculoskeletalInputModalPage } from './musculoskeletal-input-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MusculoskeletalInputModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusculoskeletalInputModalPageRoutingModule {}
