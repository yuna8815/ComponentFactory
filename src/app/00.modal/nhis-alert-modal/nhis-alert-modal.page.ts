import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nhis-alert-modal',
  templateUrl: './nhis-alert-modal.page.html',
  styleUrls: ['./nhis-alert-modal.page.scss'],
})
export class NhisAlertModalPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  doUpload() {
    this.modalController.dismiss('upload');
  }

  doInput() {
    this.modalController.dismiss('input');
  }

}
