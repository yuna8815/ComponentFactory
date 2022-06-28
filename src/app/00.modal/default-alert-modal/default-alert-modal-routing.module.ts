import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultAlertModalPage } from './default-alert-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultAlertModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultAlertModalPageRoutingModule {}
