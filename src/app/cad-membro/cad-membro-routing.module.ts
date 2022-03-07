import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadMembroPage } from './cad-membro.page';

const routes: Routes = [
  {
    path: '',
    component: CadMembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadMembroPageRoutingModule {}
