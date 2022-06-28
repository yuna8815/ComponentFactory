import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pain-level-modal',
  templateUrl: './pain-level-modal.page.html',
  styleUrls: ['./pain-level-modal.page.scss'],
})
export class PainLevelModalPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
