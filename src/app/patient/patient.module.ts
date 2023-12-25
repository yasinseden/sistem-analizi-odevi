import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientPageRoutingModule,
    HttpClientModule
  ],
  exports: [
    PatientPage
  ],
  declarations: [PatientPage]
})
export class PatientPageModule {}
