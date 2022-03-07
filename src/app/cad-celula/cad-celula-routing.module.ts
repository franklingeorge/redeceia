import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadCelulaPage } from './cad-celula.page';

const routes: Routes = [
  {
    path: '',
    component: CadCelulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadCelulaPageRoutingModule {}
