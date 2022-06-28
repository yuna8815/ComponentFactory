import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { PointModalComponent } from './00.modal/point-modal/point-modal.component';
import { ExchangeModalComponent } from './00.modal/exchange-modal/exchange-modal.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = {
    'swipe': { direction: Hammer.DIRECTION_ALL }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PointModalComponent,
    ExchangeModalComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CalendarModule, HammerModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
