import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Appointment, Doktor } from 'src/classes/classes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage {

  baseUrl: string = 'http://localhost:3000/'

  patientName: string = '';
  patientLastName: string = '';
  selectedDoctor: string = '';
  selectedDate: string = '';
  symptoms: string = '';
  doctorList: any[] = [];

  constructor(private nav: NavController, public httpService: HttpClient) {

    httpService.get<any>(this.baseUrl + 'doctors').subscribe({
      next: (res) => this.doctorList = res,
      error: (err) => console.log(err)
    })
  }

  routeBack() {
    this.nav.pop()
  }

  confirm() {
    console.log(this.doctorList[2].doctorAppointments);

    const stringifiedDate = this.selectedDate.substring(14, 19)
    const stringifiedHour = this.selectedDate.substring(0, 10)

    const appointmentData = new Appointment(this.patientName, this.patientLastName,this.symptoms, stringifiedDate, stringifiedHour)
    console.log(appointmentData);
    const doctorId = parseInt(this.selectedDoctor)
    const doctorToAddAppointmentData = this.doctorList.find(doctor => doctor.doctorId == doctorId)
    doctorToAddAppointmentData?.doctorAppointments.push(appointmentData)
    console.log(this.doctorList[2].doctorAppointments);
  }
}
