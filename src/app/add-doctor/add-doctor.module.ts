import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDoctorPageRoutingModule } from './add-doctor-routing.module';

import { AddDoctorPage } from './add-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDoctorPageRoutingModule
  ],
  declarations: [AddDoctorPage]
})
export class AddDoctorPageModule {}
