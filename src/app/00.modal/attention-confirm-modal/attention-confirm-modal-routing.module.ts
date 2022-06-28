import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionConfirmModalPage } from './attention-confirm-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AttentionConfirmModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionConfirmModalPageRoutingModule {}
