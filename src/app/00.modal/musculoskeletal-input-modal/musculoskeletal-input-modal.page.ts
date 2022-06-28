import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-musculoskeletal-input-modal',
  templateUrl: './musculoskeletal-input-modal.page.html',
  styleUrls: ['./musculoskeletal-input-modal.page.scss'],
})
export class MusculoskeletalInputModalPage implements OnInit {

  input: string;

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

  doSubmit() {
    this.modalController.dismiss({'input': this.input});
  }

}
