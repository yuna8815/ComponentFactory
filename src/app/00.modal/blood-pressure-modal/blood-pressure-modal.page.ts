import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blood-pressure-modal',
  templateUrl: './blood-pressure-modal.page.html',
  styleUrls: ['./blood-pressure-modal.page.scss'],
})
export class BloodPressureModalPage implements OnInit {

  time: string = '';
  systolic: string = '';
  diastolic: string = '';
  pulse: string = '';

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  doSave() {
    this.modalController.dismiss([this.time, this.systolic, this.diastolic, this.pulse]);
    this.dismiss();
  }

}
