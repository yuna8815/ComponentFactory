import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.page.html',
  styleUrls: ['./profile-modal.page.scss'],
})
export class ProfileModalPage implements OnInit {
  
  @Input() isImgNull: boolean;

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

  doImagePicker() {
    console.log("이미지 선택");
    this.modalController.dismiss('picker');
    this.dismiss();
  }

  doImageDelete() {
    console.log("이미지 삭제");
    this.modalController.dismiss('delete');
  }

}
