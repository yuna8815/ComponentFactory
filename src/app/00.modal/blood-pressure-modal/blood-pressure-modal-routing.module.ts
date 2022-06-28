import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodPressureModalPage } from './blood-pressure-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BloodPressureModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodPressureModalPageRoutingModule {}
