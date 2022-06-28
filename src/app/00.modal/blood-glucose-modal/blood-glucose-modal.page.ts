import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blood-glucose-modal',
  templateUrl: './blood-glucose-modal.page.html',
  styleUrls: ['./blood-glucose-modal.page.scss'],
})
export class BloodGlucoseModalPage implements OnInit {

  time: string = '';
  glucose: string = '';
  isBefore: boolean = false;
  isAfter: boolean = false;


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

  doChecked(args) {
    if(args == 'before') {
      this.isBefore = true;
      this.isAfter = false;
    } else {
      this.isBefore = false;
      this.isAfter = true;
    }
  }

  doSave() {
    this.modalController.dismiss([this.time, this.glucose, this.isBefore, this.isAfter]);
    this.dismiss();
  }

}
