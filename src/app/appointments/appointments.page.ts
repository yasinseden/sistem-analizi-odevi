import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Doktor } from 'src/classes/classes';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage {

  baseUrl: string = 'http://localhost:3000/doctors'

  doctors!: Doktor[];

  constructor(private nav: NavController, private httpService: HttpClient, private router: Router) {
    this.httpService.get<any>(this.baseUrl).subscribe({
      next: (res) => this.doctors = res,
      error: (err) => console.log(err)
    })
    setTimeout(() => {
      console.log(this.doctors);
    }, 150);
  }

  routeBack() {
    this.nav.pop()
  }

  routeAddDoctor() {
    this.router.navigate(['/add-doctor'])
  }

}
