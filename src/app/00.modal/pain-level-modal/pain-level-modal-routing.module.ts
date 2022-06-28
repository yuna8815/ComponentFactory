import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainLevelModalPage } from './pain-level-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PainLevelModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainLevelModalPageRoutingModule {}
