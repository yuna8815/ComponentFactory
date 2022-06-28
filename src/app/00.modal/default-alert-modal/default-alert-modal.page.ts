import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-default-alert-modal',
  templateUrl: './default-alert-modal.page.html',
  styleUrls: ['./default-alert-modal.page.scss'],
})
export class DefaultAlertModalPage implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() btnLabel: string;
  @Input() callback: string;

  constructor(
    private modalController: ModalController
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

  doCallback() {
    this.modalController.dismiss(this.callback);
  }

}
