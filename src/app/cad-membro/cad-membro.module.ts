import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadMembroPageRoutingModule } from './cad-membro-routing.module';

import { CadMembroPage } from './cad-membro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadMembroPageRoutingModule
  ],
  declarations: [CadMembroPage]
})
export class CadMembroPageModule {}
