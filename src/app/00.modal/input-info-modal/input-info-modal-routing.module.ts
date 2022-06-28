import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputInfoModalPage } from './input-info-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InputInfoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputInfoModalPageRoutingModule {}
