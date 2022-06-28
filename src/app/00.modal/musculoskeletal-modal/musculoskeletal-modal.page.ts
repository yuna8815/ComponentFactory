import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-musculoskeletal-modal',
  templateUrl: './musculoskeletal-modal.page.html',
  styleUrls: ['./musculoskeletal-modal.page.scss'],
})
export class MusculoskeletalModalPage implements OnInit {

  @Input() args: any;

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
    this.modalController.dismiss(false);
  }

}
