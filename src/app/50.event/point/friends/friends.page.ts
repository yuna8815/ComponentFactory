import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExchangeModalComponent } from 'src/app/00.modal/exchange-modal/exchange-modal.component';
import { PointModalComponent } from 'src/app/00.modal/point-modal/point-modal.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  
  @Input() isEnd: boolean;

  userPoint: number = 0;
  userPresentConunt: number = 0;

  userCode: any = [0, 0, 0, 0, 0, 0];

  // 친구추천 코드 기입 유무
  userRecommand: boolean = true;

  freinds: any = [
    { name: '김일월', isCompany: true, isSurvey: true },
    { name: '최이월', isCompany: true, isSurvey: false },
    { name: '이삼월', isCompany: false, isSurvey: false },
    { name: '박사월', isCompany: false, isSurvey: false },
    { name: '허오월', isCompany: false, isSurvey: false },
  ];

  lifelogs: any = [true,false,false,false,false,false,false];
  lifelogCount: number = 7;
  lifelogMsg: string = '';

  info: any = [
    { text: '가입시 추천인 입력', point: '0.5' },
    { text: '추천하여 가입한 친구가\r\n근로지 입력, 건강설문 완료 시', point: '2' },
    { text: '라이프로그 1주일 입력 완료 시', point: '1' },
  ]

  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {
    this.random();
    this.getLifelogCount();
    this.pointCalc();
  }

  pointCalc() {
    if(this.userRecommand) this.userPoint += 0.5;
    this.freinds.forEach(data => {
      if(data.isCompany && data.isSurvey) this.userPoint += 2;
    });
    if(this.lifelogs[6]) this.userPoint += 1;
  }

  async presentInfo() {
    const modal = await this.modal.create({
      component: PointModalComponent,
      componentProps: {
        'title': '친구',
        'items': this.info
      }
    })

    await modal.present();
  }

  async presentExchange() {
    const modal = await this.modal.create({
      component: ExchangeModalComponent,
      componentProps: {
        'point': this.userPoint,
        'count': this.userPresentConunt,
        'max': 2,
        'isEnd': this.isEnd
      }
    })

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data.role == 'exchange') {
      this.userPresentConunt++;
      console.log(data.role);
    }
  }

  random() {
    this.userCode.forEach((v, index) => {
      this.userCode[index] = Math.floor(Math.random() * 10)
    });
  }

  getLifelogCount() {
    this.lifelogs.forEach(element => {
      if(element) this.lifelogCount--;
    });

    if(this.lifelogCount > 0) this.lifelogMsg = `${this.lifelogCount}일 더 입력 시 `;
  }

}
