import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-input-info-modal',
  templateUrl: './input-info-modal.page.html',
  styleUrls: ['./input-info-modal.page.scss'],
})
export class InputInfoModalPage implements OnInit {

  data: any = [
    {label: '정신건강 체크하기', text: '정신건강 체크하기는 불면, 음주, 불안, 우울, 그리고 자살에 대한 항목에 대한 설문입니다.'},
    {label: '근골격 체크하기', text: '근골격 체크하기는 직업과 관련한 근골격 통증에 대한 문항으로 이루어져 있습니다.'},
    {label: '심혈관 체크하기', text: '심혈관 체크하기는 뇌·심혈관 질환에 대한 발병위험도에 대한 설문입니다.'},
    {label: '생활습관 체크하기', text: '생활습관 체크하기는 음주, 운동, 흡연에 대한 설문 입니다.'},
    {label: '사업장 유해요인 체크하기', text: '사업장 유해요인 체크하기는 근무중인 업무 환경에 대한 설문 입니다.'},
    {label: '만족도 체크하기', text: '만족도 체크하기는 건강과 직무에 대한 전반적인 만족도 조사입니다.'},
  ]

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
