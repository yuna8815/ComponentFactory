import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-attention-confirm-modal',
  templateUrl: './attention-confirm-modal.page.html',
  styleUrls: ['./attention-confirm-modal.page.scss'],
})
export class AttentionConfirmModalPage implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() btnLabel: string;

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

}
