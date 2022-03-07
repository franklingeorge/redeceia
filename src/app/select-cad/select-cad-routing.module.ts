import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCadPage } from './select-cad.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCadPageRoutingModule {}
