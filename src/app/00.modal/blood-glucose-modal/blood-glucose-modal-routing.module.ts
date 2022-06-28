import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodGlucoseModalPage } from './blood-glucose-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BloodGlucoseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodGlucoseModalPageRoutingModule {}
