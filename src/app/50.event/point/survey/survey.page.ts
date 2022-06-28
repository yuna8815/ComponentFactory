import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExchangeModalComponent } from 'src/app/00.modal/exchange-modal/exchange-modal.component';
import { PointModalComponent } from 'src/app/00.modal/point-modal/point-modal.component';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  @Input() isEnd: boolean;

  userPoint: number = 0;
  userPresentConunt: number = 0;

  survey: any = [true, true, true];

  info: any = [
    { text: '건강설문 1회, 2회 완료 시', point: '2' },
    { text: '건강설문 3회 완료 시', point: '3' },
  ]

  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {
    this.pointCalc();
  }

  pointCalc() {
    if(this.survey[1]) this.userPoint += 2;
    if(this.survey[2]) this.userPoint += 3;
  }

  async presentInfo() {
    const modal = await this.modal.create({
      component: PointModalComponent,
      componentProps: {
        'title': '설문',
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
        'max': 1,
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

}
