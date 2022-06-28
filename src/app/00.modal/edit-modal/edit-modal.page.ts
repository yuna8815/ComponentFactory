import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {

  @Input() deleteLabel: string;
  @Input() deleteDisabled: boolean;
  @Input() editLabel: string;
  @Input() editDisabled: boolean;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  doDelete() {
    this.modalController.dismiss({
      'dismissed': true,
    }, 'delete');
  }

  doReset() {
    this.modalController.dismiss({
      'dismissed': true,
    }, 'edit');
  }

}
