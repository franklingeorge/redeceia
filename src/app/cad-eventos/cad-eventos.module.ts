import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadEventosPageRoutingModule } from './cad-eventos-routing.module';

import { CadEventosPage } from './cad-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadEventosPageRoutingModule
  ],
  declarations: [CadEventosPage]
})
export class CadEventosPageModule {}
