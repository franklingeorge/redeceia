import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadCelulaPageRoutingModule } from './cad-celula-routing.module';

import { CadCelulaPage } from './cad-celula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadCelulaPageRoutingModule
  ],
  declarations: [CadCelulaPage]
})
export class CadCelulaPageModule {}
