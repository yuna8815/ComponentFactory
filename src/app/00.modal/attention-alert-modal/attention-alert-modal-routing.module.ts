import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionAlertModalPage } from './attention-alert-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AttentionAlertModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionAlertModalPageRoutingModule {}
