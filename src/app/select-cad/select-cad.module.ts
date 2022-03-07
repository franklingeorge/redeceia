import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCadPageRoutingModule } from './select-cad-routing.module';

import { SelectCadPage } from './select-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCadPageRoutingModule
  ],
  declarations: [SelectCadPage]
})
export class SelectCadPageModule {}
