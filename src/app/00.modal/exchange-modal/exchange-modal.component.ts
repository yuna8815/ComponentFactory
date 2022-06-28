import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exchange-modal',
  templateUrl: './exchange-modal.component.html',
  styleUrls: ['./exchange-modal.component.scss'],
})
export class ExchangeModalComponent implements OnInit {

  @Input() point: number;
  @Input() count: number;
  @Input() max: number;
  @Input() isEnd: boolean;

  btnMsg: string = '';
  isDisabled: boolean = false;

  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {
    this.getButtonMsg();
  }

  dismiss(role) {
    this.modal.dismiss({data: null, role: role});
  }

  getButtonMsg() {
    if(this.isEnd) {
      this.isDisabled = true;
      this.btnMsg = '이벤트가 종료되었습니다'
    }
    else if(this.count == this.max) {
      this.isDisabled = true;
      this.btnMsg = '최대 개수만큼 신청되었습니다'
    }
    else if(this.point - (5 * this.count) < 5 && this.count < this.max) {
      this.isDisabled = true;
      this.btnMsg = '포인트가 부족합니다'
    }
    else {
      this.isDisabled = false;
      this.btnMsg = '교환 신청하기'
    }
  }

}
