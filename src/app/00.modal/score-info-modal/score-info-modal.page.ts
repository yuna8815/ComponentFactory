import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-score-info-modal',
  templateUrl: './score-info-modal.page.html',
  styleUrls: ['./score-info-modal.page.scss'],
})
export class ScoreInfoModalPage implements OnInit {

  @Input() object: any;

  data: any = {
    0: [
      {label: '매우 만족', score: 0},
      {label: '약간 만족', score: 1},
      {label: '그저 그렇다', score: 2},
      {label: '약간 불만족', score: 3},
      {label: '매우 불만족', score: 4},
    ],
    1: [
      {label: '전혀 방해(걱정)하지 않는다', score: 0},
      {label: '약간', score: 1},
      {label: '다소', score: 2},
      {label: '상당히', score: 3},
      {label: '매우 많이', score: 4},
    ],
    2: [
      {label: '전혀 없었다', score: 0},
      {label: '월 1회 미만', score: 1},
      {label: '월 1회', score: 2},
      {label: '주 1회', score: 3},
      {label: '거의 매일', score: 4},
    ],

    3: [
      {label: '있었으나 지난 1년간에는 없었다', score: 2},
      {label: '있었다', score: 4},
    ],

    4: [
      {label: '전혀 방해 받지 않았다', score: 0},
      {label: '며칠동안 방해 받았다', score: 1},
      {label: '7일 이상 방해 받았다', score: 2},
      {label: '거의 매일 방해 받았다', score: 3},
    ],

    5: [
      {label: '전혀 그렇지 않다', score: 0},
      {label: '며칠동안 그렇다', score: 1},
      {label: '7일 이상이 그렇다', score: 2},
      {label: '거의 매일 그렇다', score: 3},
    ],

    6: [
      {label: '없음', score: 0},
      {label: '약간', score: 1},
      {label: '중간', score: 2},
      {label: '심함', score: 3},
      {label: '매우 심함', score: 4},
    ],
    
    7: [
      {label: '한두잔', score: 0},
      {label: '3-4잔', score: 1},
      {label: '5-6잔', score: 2},
      {label: '7-9잔', score: 3},
      {label: '10잔 이상', score: 4},
    ],

    8: [
      {label: '아니오', score: 0},
    ],

    9: [
      {label: '예', score: 1, stacked: '1번문항'},
      {label: '예', score: 2, stacked: '2번문항'},
      {label: '예', score: 6, stacked: '3번문항'},
      {label: '예', score: 10, stacked: '4-5번문항'},
      {label: '예', score: 4, stacked: '6번문항'},
    ]

  };

  currentData: any = {};

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.setData();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  setData() {
    for(let i=0;i<Object.values(this.object).length;i++) {
      let index: any = this.object[i];
      Array.prototype.push.apply(this.currentData, [this.data[index]]);
    }
  }

}
