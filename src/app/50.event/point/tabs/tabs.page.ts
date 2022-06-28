import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FriendsPage } from '../friends/friends.page';
import { SurveyPage } from '../survey/survey.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer;

  segment: any = [
    {label: '친구 포인트', value: 'friends'},
    {label: '설문 포인트', value: 'servey'},
  ];

  segmentValue: string = 'friends';
  temp: any;

  // 이벤트 종료 날짜
  END_DATE: string = '2022-12-31';

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.create(this.segmentValue);
  }

  create(value) {
    if(this.temp != null) {
      this.temp.destroy();
      this.temp = null;
    }

    let _component;

    switch(value) {
      case 'friends': _component = FriendsPage; break;
      case 'servey': _component = SurveyPage; break;
      default: _component = null;
    }

    const factory = this.resolver.resolveComponentFactory(_component);
    this.temp = this.componentContainer.createComponent(factory);

    const _date = new Date();
    const END_DATE = new Date(this.END_DATE).toISOString().substr(0, 10);
    const TODAY = new Date(_date.getTime() - (_date.getTimezoneOffset() * 60000)).toISOString().substr(0, 10);

    if(END_DATE <= TODAY) this.temp.instance.isEnd = true;
    else this.temp.instance.isEnd = false;
  }

}
