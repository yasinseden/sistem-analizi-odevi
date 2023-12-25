import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.page.html',
  styleUrls: ['./add-doctor.page.scss'],
})
export class AddDoctorPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  routeBack() {
    this.nav.pop()
  }
}
