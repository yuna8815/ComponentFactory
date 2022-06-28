import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-attention-alert-modal',
  templateUrl: './attention-alert-modal.page.html',
  styleUrls: ['./attention-alert-modal.page.scss'],
})
export class AttentionAlertModalPage implements OnInit {

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

  doDelete() {
    this.modalController.dismiss('delete');
  }

}
