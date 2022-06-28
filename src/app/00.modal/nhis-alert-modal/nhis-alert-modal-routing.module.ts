import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhisAlertModalPage } from './nhis-alert-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NhisAlertModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhisAlertModalPageRoutingModule {}
