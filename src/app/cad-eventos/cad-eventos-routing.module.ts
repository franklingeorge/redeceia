import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadEventosPage } from './cad-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: CadEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadEventosPageRoutingModule {}
