import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckConfirmModalPage } from './check-confirm-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CheckConfirmModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckConfirmModalPageRoutingModule {}
